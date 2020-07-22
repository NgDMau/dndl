var Pool = require('pg-pool');
var path = require('path');
var decode = require('../../models/send_mail')

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: true //(process.env.DB_SSL == 'true')
});

module.exports = function(app) {
var username = '';
app.get('/changepass', function(req, res) {
    if (req.query.hash) {
        res.render('changepass.ejs');
        var result_decode = decode.decode(req.query.hash);
        username = result_decode.split('_date_')[0];
        console.log(username);
    }
})
app.post('/changepass', function(req, res) {
    console.log(username);
    var password = req.body.password[0];
    changePass(username, password).then(function(result) {
        if (result.name === 'error') {
            res.send('ERROR');
        } else {
            console.log(result);
            res.render('verify_success.ejs');
        }

    })
})
}

async function changePass(username, password) {
    const client = await pool.connect();
    try {
        var cmd = 'UPDATE customers SET password=($1) WHERE username=($2)';
        var values = [password, username]
        var result = await client.query(cmd, values);
        client.release();
        return result;

    } catch ( e ) {
        client.release();
        return e;

    }
}