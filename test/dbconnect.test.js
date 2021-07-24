const assert = require('assert');

const Pool = require('pg-pool');  

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: { rejectUnauthorized: false }//(process.env.DB_SSL == 'true')
});

async function testConnect() {
    const client = await pool.connect();
    try {
        //client.release();
        return client
    } catch (e) {
        //client.release();
        return e;
    }
}

// testConnect().then((result) => {
//     console.log((result.constructor.name))
// })

describe('Test postgreSql connection', () => {
    it('Should be object Client', () => {
        return testConnect()
        .then((result) => {
            assert.equal(result.constructor.name, 'Client');
        })
    })
})