var Pool = require('pg-pool');


var pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: true,
    user: process.env.DB_USER
})

console.log(pool);

async function testConnect() {
    const client = await pool.connect();
    try {
        var result = await client.query("BEGIN");
        return result
    } catch (e) {
        return e;
    }
}

testConnect().then(console.log)