
module.exports = class Project {
    constructor (projectjson) {
        this.project_name = projectjson.name;
        this.project_type = projectjson.type
    }

    // Other code is here

    async create() {
        var client = require('./db');
        
        var text = 'CREATE TABLE ' + this.project_name + '() INHERITS (' + this.project_type +')';
        console.log(text)
        try {
            (await client).query(text)
        } catch(e) {
            throw (e);
        }
        
        
    }

    printRes(res) {
        console.log(res)
    }

}