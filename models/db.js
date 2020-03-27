
var Pool = require('pg-pool')    

const pool = new Pool({
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    port: process.env.port,
    database: process.env.database,
    ssl: process.env.ssl
});

module.exports = {

    createChildTableInSchema: async function (child_table, schema, parent_table) {
        var cmd = 'CREATE TABLE ' + schema + '.' + child_table + '() INHERITS (' + parent_table + ')';
        console.log(cmd);
        var client = await pool.connect()

        try {
            var res = await client.query(cmd);
            return res;
        } catch(e) {
            return e;
        }
    },

    dropTableInSchema: async function (table, schema) {
        var cmd = 'DROP TABLE ' + schema + '.' + table;
        console.log(cmd);
        var client = await pool.connect()
        try {
            var res = await client.query(cmd);
            return res;
        } catch(e) {
            return e;
        }
    },

    registerNewProject: async function (values) {
        var cmd = 'INSERT INTO projects_metadata VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)';
        var client = await pool.connect()
        try {
            var res = await client.query(cmd, values);
            return res;
        } catch(e) {
            return e;
        }
    },

    testFunction: async function () {
        try{
            const fetch = require("node-fetch");
            var res = await fetch('https://www.google.com')
            return res;
        } catch(e) {
            return e;
        }
       
    }

}

//dropTableInSchema('xinchao', 'projects').then(console.log)