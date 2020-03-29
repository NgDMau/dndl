
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
    }

    async register() {
        var db = require('./db');
        var values = [this.name, this.id, this.type, this.theme, this.rate, this.starttime, this.endtime, this.datafile, this.uploadtime, this.priority, this.owner_id];
        var result = false

        await db.registerNewProject(values)
        .then((res) => {
            //console.log(typeof(res))
            //console.log(res)
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
        var parent_table = this.type;
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
            console.log("this is res ==============",res)
            result = true;
        })
        .catch(err => {
            console.error(err)
            result = false;
        });
        
        return result;
    }

}