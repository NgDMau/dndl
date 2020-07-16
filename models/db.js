
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
        var cmd = 'INSERT INTO projects_metadata VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11,$12)';
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

    getPage: async function (table,index) {
        var cmd = "select count(*) as total_page from "+table
        var client = await pool.connect()

        try{
            var res = await client.query(cmd);
            client.release()
            return res
        } catch(e) {
            client.release();
            return e;
        }
    },

    getAllProjects: async function (index) {
        var cmd = "select id, name, type, rate, starttime from projects_metadata order by starttime desc OFFSET (("+index+" - 1) * 10) FETCH NEXT 10 ROWS ONLY"
        var client = await pool.connect()

        try{
            var res = await client.query(cmd);
            client.release()
            return res
        } catch(e) {
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

    getProgressProj: async function (table) {
        var cmd = 'select count(id) as total_task, count(case when checked is not null then checked end) as task_finish, count(case when checked != 0 then checked end) as task_ischecked, count(case when checked = 2 then checked end) as task_wrong, count(distinct worker_id ) as total_worker, sum(case when cost is not null and checked = 1 then cost end) as sum_cost from projects.'+table;
        var client = await pool.connect()

        try{
            var res = await client.query(cmd);
            client.release()
            return res
        } catch(e) {
            client.release();
            return e;
        }
    },

    getProgressByWorker: async function (table, index) {
        var cmd = "SELECT table_users.username as worker_name, count(table_project.id) as total_task, round(avg(table_project.finish_time),2) as avg_time, count(case when table_project.checked = 1 then table_project.checked end) as task_istrue FROM projects."+table+" as table_project left join public.users as table_users on table_project.worker_id = table_users.id where table_project.worker_id is not null group by table_users.username Order by table_users.username OFFSET (("+index+" - 1) * 10) FETCH NEXT 10 ROWS ONLY"
        var client = await pool.connect()
        try{
            var res = await client.query(cmd);
            client.release()
            return res
        } catch(e) {
            client.release();
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
    
    getProgressByTask: async function (table, index) {
        var cmd = "select table_project.id, table_users.username as worker_name, table_project.finish_at, table_project.finish_time, table_project.checked, cost from projects."+table+" as table_project left join public.users as table_users on table_project.worker_id = table_users.id where table_project.worker_id is not null order by id OFFSET (("+index+" - 1) * 10) FETCH NEXT 10 ROWS ONLY"
        var client = await pool.connect()
        try{
            var res = await client.query(cmd);
            client.release()
            return res
        } catch(e) {
            client.release();
            return e;
        }
    },

    getTaskforReviewer: async function (table) {
        var cmd = "SELECT * FROM projects."+ table +" WHERE checked IS NOT NULL ORDER BY id LIMIT 1"
        var client = await pool.connect()
        try{
            var res = await client.query(cmd);
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

    fetchUnreviewedData: async function(project_id) {
        var cmd = "SELECT * FROM projects." + project_id + " WHERE checked IS NULL AND result IS NOT NULL LIMIT 1";
        // var cmd = "SELECT * FROM projects." + project_id + " WHERE checked IS NULL AND result is NULL LIMIT 1";
        var client = await pool.connect();
        try {
            var result = await client.query(cmd);
            console.log("fetchUnreviewedData", result);
            // client.release();
            //client.release();

            if (result.rows[0].audio !== null) {
            if (result.rows[0]) {
                var data = {
                    id: result.rows[0].id,
                    url: result.rows[0].audio,
                    text: result.rows[0].result.value.text,
                    code: "continue"
                }
                console.log("result rows 0", result.rows[0])
            } 
        } else {
            var data = {
                code: "full"
            }
        }
            client.release()
            return data;
        } catch(e) {
            client.release();
            return e;
        }
    },

    insertReviewData: async function(reviewer_id, project_id, review_time, data) {
        var cmd = "UPDATE projects." + project_id + " SET checked=$1, reviewer_id=$2, reviewer_decision=$3, reviewer_correction=$4, reviewer_comment=$5, review_time=$6 WHERE id=$7"; 
        var values = [1, reviewer_id, data.review_accepted, data.review_correct_text, data.review_comment, review_time, data.review_id];
        var client = await pool.connect();
        var insert_review_result = await client.query(cmd, values);
        if (insert_review_result.severity | insert_review_result.code) {
            console.log("ERROR of insertReviewData:", insert_review_result);
            client.release()
            return false
        }
        client.release()
        return true;
    },

    getClient: async function () {
        try {
            var client = await pool.connect();
            return client;
        } catch (e) {
            return e;
        }
    },
    
    getDataFromTable: async function (table) {
        // var cmd = "SELECT * FROM audio_transcription WHERE result IS NULL ORDER BY random()";
        var values = [table];
        var cmd = "SELECT * FROM projects." + table + " WHERE checked IS NULL AND RESULT IS NULL ORDER BY random()";
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

    getPool: function () {
        return pool;
    }
}

//dropTableInSchema('xinchao', 'projects').then(console.log)