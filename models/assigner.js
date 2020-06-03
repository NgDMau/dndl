const db = require('./db');
const User = require('./user');
const Project = require('./project');

const MAX_SAMPLES_PER_REQUEST = 20;


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
    async getDataToLabel(user_id, project_id) {
        let cmd = "SELECT * FROM public.sentiment \
                        WHERE $1 != ALL(labeled_values)";
        let values = [ user_id];
        let client = await pool.connect();
        try {
            let result = client.query(cmd, values);
            client.release();
            return result;
        } catch(e) {
            console.log(e);
            client.release();
            return e;
        }
    },
}