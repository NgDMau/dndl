var path = require('path')
var Pool = require('pg-pool')
var send_mail = require('../routes/send-mail')

email_from = process.env.EMAIL_USERNAME;
pass_email = process.env.EMAIL_PASSWORD;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: true //(process.env.DB_SSL == 'true')
});

module.exports = function(app) {
app.get('/signup', function(req, res) {
    res.render('signup.ejs')
});
app.post('/signup', function(req, res) {
    var username = req.body.email;
    var email = req.body.email;
    var company = req.body.company;
    var phone = req.body.sdt;
    var password = req.body.password[0];
    creat_customer();
    async function creat_customer() {
        const client = await pool.connect();
        try {
            await client.query('BEGIN');
            await client.query('SELECT "id" FROM customer WHERE "username"=$1', [username], async function(err, result) {
                if (err) {
                    client.release();
                    res.render('signup.ejs');
                }
                if (result.rows[0] == null) {
                    console.log("success")
                    send_mail(email_from, pass_email, username, email);
                    res.render('signup_success.ejs')
                    await client.query('INSERT INTO customer("username","email","password","company","phone") VALUES($1,$2,$3,$4,$5)', [username, email, password, company, phone]);
                    client.release();
                } else {
                    res.render('signup.ejs');
                }
            })
        } catch ( e ) {
            throw (e);
        }

    }

// res.render('signup.ejs')
})
}
