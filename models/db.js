
var Pool = require('pg-pool')    

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: { rejectUnauthorized: false }//(process.env.DB_SSL == 'true')
});

module.exports = {

    getPgPool: function() {
        return pool;
    },

    createChildTableInSchema: async function (child_table, schema, parent_table) {
        var cmd = 'CREATE TABLE ' + schema + '.' + child_table + '() INHERITS (' + parent_table + ')';
        console.log(cmd);
        var client = await pool.connect()

        try {
            var res = await client.query(cmd);
            client.release();
            return res;
        } catch(e) {
            client.release();
            return e;
        }
    },

    registerNewProject: async function (values) {
        var cmd = 'INSERT INTO projects_metadata VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
        var client = await pool.connect()
        try {
            var res = await client.query(cmd, values);
            client.release();
            return res;
        } catch (e) {
            client.release();
            return e;
        }
    },

    unregisterProject: async function (projectID) {
        var cmd = 'DELETE FROM projects_metadata WHERE id=$1'
        var values = [projectID]
        var client = await pool.connect();
        try {
            var res = await client.query(cmd, values)
            client.release();
            return res;
        } catch(e) {
            client.release();
            return e;
        }

    },

    dropTableInSchema: async function (table, schema) {
        var cmd = 'DROP TABLE ' + schema + '.' + table;
        console.log(cmd);
        var client = await pool.connect()
        try {
            var res = await client.query(cmd);
            client.release();
            return res;
        } catch(e) {
            client.release();
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
    },

    getColumnOfTable: async function (column, table) {
        var cmd = 'SELECT id FROM projects_metadata'
        var  values = [column, table]
        var client = await pool.connect()

        try {
            var res = await client.query(cmd);
            client.release();
            return res;
        } catch (e) {
            client.release();
            return e;
        }
    },

    getAllProjectsOf: async function (userid) {
        var cmd = 'SELECT * FROM "projects_metadata" WHERE "owner_id"=$1'
        var value = [userid]
        var client = await pool.connect()

        try{
            var res = await client.query(cmd, value);
            client.release()
            return res
        } catch(e) {
            client.release();
            return e;
        }
    },

    updateRoleOfUserById: async function (role, id) {
        var cmd = 'UPDATE users SET role = $1 WHERE id = $2';
        var values = [role, id];
        var client = await pool.connect()

        try {
            var res = await client.query(cmd);
            client.release();
            return res;
        } catch (e) {
            client.release();
            return e;
        }
    },

    getClient: async function () {
        try {
            var client = await pool.connect();
            return client;
        } catch (e) {
            return e;
        }
    },

    getPool: function () {
        return pool;
    },

    insertIntoTable: async function (table, data) {
        var cmd = "UPDATE projects." + table + " SET result=$1, worker_id=$2, label=$3, finish_at=$4 WHERE id=$5";
        var values = [data, data.createdBy, data.value.text, data.createdDate, data.id];
        var client = await pool.connect();
        try {
            var result = await client.query(cmd, values);
            client.release();
            return result;
        } catch(e) {
            client.release();
            return e;
        }
    },

    getDataFromTable: async function (table) {
        var cmd = "SELECT * FROM projects." + table + " WHERE finish_at IS NULL ORDER BY random()";
        // var values = [table];
        var client = await pool.connect();
        try {
            var result = await client.query(cmd);
            console.log("getDataFromTable:", result)
            client.release();
            return result.rows[0];
        } catch(e) {
            client.release();
            return e;
        }
    },

    deleteFromTable: async function(table_name, condition) {
        var cmd = "DELETE FROM " + table_name +" WHERE " + condition;
        var client = await pool.connect();
        try {
            var result = await client.query(cmd);
            client.release();
            return result;
        } catch(e) {
            client.release();
            return e;
        }
    },

    fetchUnreviewedData: async function(project_id) {
        var cmd = "SELECT * FROM projects." + project_id + " WHERE checked IS NULL AND result is NULL LIMIT 1";
        var client = await pool.connect();
        try {
            var result = await client.query(cmd);
            console.log("fetchUnreviewedData", result);
            //client.release();

            if (result.rows[0]) {
                var data = {
                    url: result.rows[0].audio,
                    text: result.rows[0].result.value.text,
                    code: "continue"
                }
                console.log("result rows 0", result.rows[0])
            } else {
                var data = {
                    code: "full"
                }
            }
            
            return data;
        } catch(e) {
            client.release();
            return e;
        }
    }
}

//dropTableInSchema('xinchao', 'projects').then(console.log)