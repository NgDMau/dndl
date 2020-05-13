// const Pool = require('pg-pool')

// var pool =  {
//     host: process.env.DB_HOST,
//     name: process.env.DB_DATABASE,
//     password: process.env.DB_PASSWORD,
//     port: 5432 || process.env.DB_PORT,
//     ssl: false,
//     user: process.env.DB_USER
// }

// console.log(pool);
//console.log(process.env);

// async function testConnection() {
//     try {
//         var result = await pool.connect();
//         return result
//     } catch(e) {
//         return e;
//     }
    
// }

// testConnection().then(console.log)
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
