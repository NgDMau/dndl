var Client  = require('pg');
var Pool = require('pg-pool')

const pool = new Pool({
    user: 'mpndhiboquobry',
    password: '92cf533ac275e9f7a116c6eb8e79477b3fa074679712bf8165a08f834db679f5',
    host: 'ec2-3-229-210-93.compute-1.amazonaws.com',
    port: '5432',
    database: 'd5tabqes3975',
    ssl: true
});
loginAttempt();
	async function loginAttempt() {
        const client = await pool.connect()
                try{
                    await client.query('BEGIN')
                    var currentAccountsData = await JSON.stringify(client.query('SELECT "id", "username", "email", "address", "role" FROM "users" WHERE "username"=$1', ['guest'], function(err, result) {
                        console.log(result.rows[0])
                    }))
                }
                
                catch(e){throw (e);}
}
