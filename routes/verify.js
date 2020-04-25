var Pool = require('pg-pool');
var CryptoJS = require("crypto-js");
var path = require('path');

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: true //(process.env.DB_SSL == 'true')
});

function decode(encrypted) {
    var username = CryptoJS.AES.decrypt(encrypted, "inlabinfore");
    return username.toString(CryptoJS.enc.Utf8);
}
module.exports = function(app) {
app.get('/verify', (req, res) => {
    if (req.query.hash) {
        try {
            var hash = req.query.hash;
            console.log(hash);
            var username = decode(hash).split("_date_")[0];
            console.log(username);
            verifyUser(username);
            async function verifyUser(hash) {
                const client = await pool.connect();
                try {
                    await client.query('BEGIN');
                    await client.query("UPDATE users SET verify=1 WHERE username=($1)", [username], function(err, result) {
                        if (err) {
                            client.release();
                        } else {
                            res.render(path.join(__dirname, '../views/', '/verify_success.ejs'));
                            client.release();
                        }
                    });
                    await JSON.stringify(client.query('SELECT "id", "username", "email", "address", "role", "full_name","verify" FROM "users" WHERE "username"=$1', [username], function(err, result) {
                        console.log(result);
                    }))

                } catch ( e ) {
                    throw (e);
                }
            }

        } catch ( e ) {
            throw (e);
        }

    } else {
        res.send("error");
    }

})
}