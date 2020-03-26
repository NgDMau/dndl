
module.exports = class Project {

    constructor (projectjson) {
        this.name = projectjson.name;
        this.id = projectjson.id;
        this.type = projectjson.type;
        this.theme = projectjson.theme;
        this.rate = projectjson.rate;
        this. starttime = projectjson.starttime;
        this.endtime = projectjson.endtime;
        this.datafile = projectjson.datafile;
        this.priority = projectjson.priority;
        this.uploadtime = projectjson.uploadtime;
        this.owner_id = projectjson.owner_id;
    }

    register() {
        console.log('resigtering....')
        var db = require('./db');
        var values = [this.name, this.id, this.type, this.theme, this.rate, this.starttime, this.endtime, this.datafile, this.uploadtime, this.priority, this.owner_id];

        db.registerNewProject(values)
        .then(console.log)
        .catch (err => {
            throw err
        })
        return
        
        
    }

    create() {
        console.log("creating......")
        var db = require('./db');
        var child_table = this.id;
        var parent_table = this.type;
        var schema = 'projects';

        db.createChildTableInSchema(child_table, schema, parent_table)
        .then(console.log);
        
        return
    }

    async getData() {

    }

    async uploadData() {

    }

    destroy() {
        var db = require('./db');
        var drop_table = this.id;
        var schema = 'projects';

        db.dropTableInSchema(drop_table, schema)
        .then(console.log)
            .catch(err => {
                throw err
            })        
        
    }

}