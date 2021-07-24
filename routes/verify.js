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


            verifyUser(username)
            .then(function(result){
                console.log(result);
                if (result.name !== 'error'){
                    res.render('verify_success.ejs')
                    return
                }
                res.send("Failed to verify!")
            });
            

        } catch ( e ) {
            throw (e);
        }

    } else {
        res.send("error");
    }

})
}

async function verifyUser(username) {
    const client = await pool.connect();
    try {
        var cmd = "UPDATE customers SET verify=1 WHERE username=($1)";
        var values = [username];
        var result = await client.query(cmd, values);
        client.release();
        return result;
    } catch ( e ) {
        client.release()
        return e;
    }
}
