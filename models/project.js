const fs = require('fs');
var db = require('./db')

module.exports = class Project {

    constructor (projectjson) {
        this.name = projectjson.name;
        this.id = projectjson.id;
        this.type = projectjson.type;
        this.theme = projectjson.theme;
        this.rate = projectjson.rate;
        this.starttime = projectjson.starttime;
        this.endtime = projectjson.endtime;
        this.datafile = projectjson.datafile;
        this.priority = projectjson.priority;
        this.uploadtime = projectjson.uploadtime;
        this.owner_id = projectjson.owner_id;
        this.labels = projectjson.labels;
    }

    async register() {
        var db = require('./db');
        var values = [this.name, this.id, this.type, this.theme, this.rate, this.starttime, this.endtime, this.datafile, this.uploadtime, this.priority, this.owner_id, this.labels];
        var result = false

        await db.registerNewProject(values)
        .then((res) => {
            //console.log(typeof(res))
            console.log(res)
           // console.log(res.name)
            //console.log(res.detail)

            result = res
            
        })
        .catch (err => {
            console.error(err)
            result = res
        })

        return result 
    }

    async create() {
        var db = require('./db');
        var child_table = this.id;
        var parent_table =  this.type;
        var schema = 'projects';
        var result = false;

        await db.createChildTableInSchema(child_table, schema, parent_table)
        .then((res) => {
            console.log("this is res ==============", res)
            result = true;
        })
        .catch(err => {
            console.error(err)
            result = false;
        });
        
        return result;
    }

    async importRawFileToTable() {

        var db = require('./db');
        var pool = db.getPool();
        //var client = await pool.connect();
        var raw_file = this.datafile;
        var project_type = this.type;
        var table_name = this.id;
        var that = this;

        //console.log("Registered labels ", result)
        fs.readFile(raw_file, async function(err, data) {
            if (err) throw err;

            var lines = data.toString().split('\n');
            
            if (lines[0].includes("|")) {
                var labels = lines[0].split("|");
                lines.pop();
            }
            
            lines.shift();
            var labels = ["This task does not require predefined labels!"] 
            
            console.log("Labels: ", labels);

            that.insertDataToDb(lines, table_name, project_type)
                .then(function(result) {
                    console.log('Result of insertDataToDb: ', result);
                    return result;
                })
                .then(function(result) {
                    that.registerLabelsToDb(that.id, labels)
                    .then(function(result) {
                        console.log("Result of registerLabelsToDb: ", result);
                    })
                })
            // that.registerLabelsToDb(that.project_id, labels)
            //     .then(async (result) =>  {
            //         console.log("Result command/code of registerLabelsToDb: ", result.command || result.code);
            //         console.log("Lines insert to DB: \n", lines);

            //         var insert_result = await that.insertDataToDb(lines, table_name);

            //         return insert_result;
            //     })
            //     .then((result) => {
            //         console.log("Result of insertDataToDb: ", result);
            //     })
        })
    }

    async insertDataToDb (lines, table_name, project_type) {
        var db = require('./db');
        var pool = db.getPool();
        var client = await pool.connect();

        var cmd;
        var values_number;

        switch(project_type) {
            case "image_description":
                cmd = "INSERT INTO projects." + table_name + "(image, result) " + "VALUES($1, $2)";
                values_number = 2;
                break;
            case "image_object_detection":
                cmd = "INSERT INTO projects." + table_name + "(image, result) " + "VALUES($1, $2)";
                values_number = 2;
                break;
            case "audio_transcription":
                cmd = "INSERT INTO projects." + table_name + "(audio, result) " + "VALUES($1, $2)";
                values_number = 2;
                break;
            case "image_classification":
                cmd = "INSERT INTO projects." + table_name + "(image, result) " + "VALUES($1, $2)";
                values_number = 2;
                break;
            default:
                cmd = "INSERT INTO projects." + table_name + "(content, labeled_workers, labeled_values, labeled_time)" + " VALUES($1, $2, $3, $4)";
                values_number = 4;
                break;
        }

        
        var final_result = []

        try {
            for (var line in lines) {
                console.log(lines[line])

                switch (values_number) {
                    case 4:
                        var values = [lines[line], [], [], []];
                        break;
                    case 2:
                        var values = [lines[line], []];
                        break;
                    default:
                        var values = [lines[line], []];
                        break;
                    }
                    
                    var result = await client.query(cmd, values);
                }
            
            client.release();
            final_result.push(result);
            return final_result;
        } catch (e) {
            console.log(e)
            client.release();
            final_result.push(e);
            return final_result;
        }
    }

    getCommandByType (type, tablename) {
        var command_json = {
            sentiment: "INSERT INTO projects." + tablename + "(content, labeled_workers, labeled_values, labeled_time)" + " VALUES($1, $2, $3, $4)",
            topic: "INSERT INTO projects." + tablename + "(content, labeled_workers, labeled_values, labeled_time)" + " VALUES($1, $2, $3, $4)",
            audio: "INSERT INTO projects." + tablename + "(content, labeled_workers, labeled_values, labeled_time)" + " VALUES($1, $2, $3, $4)",
            image_object_label: "INSERT INTO projects." + tablename + "("
        }
    } 

    async registerLabelsToDb (project_id, project_labels) {
        console.log("Insert to table ", project_id, " labels ", project_labels);
        var pool = require('./db').getPool(); 
        var cmd = "UPDATE projects_metadata SET labels=$1 WHERE id=$2";
        var values = [project_labels, project_id];
        var client = await pool.connect();
        var result = await client.query(cmd, values);
        client.release();
        return result;
    }

    async getData() {

    }

    async uploadData() {

    }

    async destroy() {
        var db = require('./db');
        var drop_table = this.id;
        var schema = 'projects';
        var result = false;
        

        await db.dropTableInSchema(drop_table, schema)
        .then((res) => {
            console.log("result of dropTableInSchema ",res);
            var result = await this.unregister();
            return result;
        })
        .then((res) => {
            console.log("result of this.unregister ", res);
        })
        .catch(err => {
            console.error(err)
            result = false;
        });


        /** Second approach */
        var drop_result = await db.dropTableInSchema(drop_table, schema);
        console.log("Drop result: ", drop_result);
        var unregister_result = await this.unregister();
        console.log("Unregistered result: ", unregister_result);
        if (drop_result.code && unregister_result.code) {
            return false;
        }
        return true;
    }

    async unregister() {
        var condition = "id = " + this.id
        var result = await db.deleteFromTable("projects_metadata", condition);
        return result;
    }

}