var path = require('path')
var send_mail = require("../models/send_mail")
var Pool = require('pg-pool');

email_from = process.env.EMAIL_USERNAME || "inlabvietnam";
pass_email = process.env.EMAIL_PASSWORD || "Nisci123";

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: true //(process.env.DB_SSL == 'true')
});

module.exports = function(app) {
app.get('/forgotpass', function(req, res) {
    res.render('forgot.ejs', {
        error: "Quên mật khẩu"
    });
});
app.post('/forgotpass', function(req, res) {
    var email = req.body.email;
    checkUser(email).then(function(result) {
        console.log(result);
        if (result.name === 'error') {
            res.send('ERORR');
        } else if (result.rowCount === 0) {
            res.render('forgot.ejs', {
                error: 'Tài khoản không tồn tại'
            })
        } else {
            var subject = "Inlab verify signup";
            var link = "http://inlab.nisci.gov.vn/changepass?hash=" + send_mail.encode(email);
            var html = "Hello,<br> Please Click on the link to change your password.<br><a href=" + link + ">Click here to verify</a>";
            send_mail.send_mail(email, email, subject, html);
            res.render('signup_success.ejs', {
                title: "Quên mật khẩu",
                header: "Đã gửi email",
                span: "Kiểm tra email để tiến hành đổi mật khẩu"
            })
        }
    })
})
}
// if error => result.name = 'error'
// if username not exist => result.rowCount =0
async function checkUser(username) {
    const client = await pool.connect();
    try {
        var cmd = 'SELECT id FROM customers WHERE username=($1)';
        var value = [username];
        var result = await client.query(cmd, value);
        client.release();
        return result;

    } catch ( e ) {
        client.release();
        return e;

    }
}