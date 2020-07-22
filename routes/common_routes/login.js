var passport = require('passport');
var Pool = require('pg-pool')
var path = require('path')
var customStrategy = require('passport-custom').Strategy;

// var app = express();
const pool = new Pool({
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: { rejectUnauthorized: false }
});

console.log(process.env.DB_DATABASE)

// function test() {
//     const testFolder = '../temp_data/';
//     const fs = require('fs');

//     fs.readdir(testFolder, (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
//     });
// }

module.exports = function (app) {
    

    app.get('/login', function (req, res) {
        
        //console.log(pool)
        if (req.isAuthenticated()) {
            res.redirect('/dashboard');
        } else {
            const mess = req.flash('login_fail');
            res.render('common_views/login.ejs', {mess:mess} )
        }
    });

    app.get('/login_fail', function (req, res) {
        const mess = req.flash('login_fail', 'Đăng nhập thất bại. Hãy kiểm tra lại tên đăng nhập.');
        res.redirect('/login')
    });


    passport.use('id-only', new customStrategy(
        function (req, done) {
            var id = req.body.username;
            var password = req.body.password;
            loginAttempt();
            async function loginAttempt() {

                const client = await pool.connect()
                try {
                    await client.query('BEGIN')
                    await JSON.stringify(client.query('SELECT "id", "username", "email", "address", "role", "full_name", "password" FROM "users" WHERE "username"=$1', [id], function (err, result) {
                        if (err) {
                            client.release();
                            return done(err)
                        }
                        if (result.rows[0] == null) {
                            client.release();
                            return done(null, false);
                        }
                        else {
                            //let res = client.query("UPDATE users SET last_login=(SELECT now() ::timestamp AT TIME ZONE 'GMT+7') WHERE username=($1)", [result.rows[0]]);
                            //console.log(res);

                            client.release();
                            if (result.rows[0].password === password){
                                console.log("checking!!")
                                return done(null, result.rows[0]);
                            }
                            
                            return done(null, false);
                        }
                    }))
                }
                catch (e) { throw (e); }
            };
        }
    ))

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });	

    app.post('/login/worker',
        passport.authenticate('id-only', {
            successRedirect: '/dashboard',
            failureRedirect: '/login_fail'
        }), function (req, res) {
            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
        });

    passport.use('full-login', new customStrategy(
        function (req, done) {
            var id = req.body.username;
            var password = req.body.password;

            loginAttempt();
            async function loginAttempt() {

                const client = await pool.connect()
                try {
                    await client.query('BEGIN')
                    await JSON.stringify(client.query('SELECT "id", "username", "password", "company", "phone", "email" FROM "customers" WHERE "username"=$1', [id], function (err, result) {
                        if (err) {
                            client.release();
                            return done(err)
                        }
                        if (result.rows[0] == null) {
                            client.release();
                            return done(null, false);
                        }
                        else {
                            //let res = client.query("UPDATE users SET last_login=(SELECT now() ::timestamp AT TIME ZONE 'GMT+7') WHERE username=($1)", [result.rows[0]]);
                            //console.log(res);
                            console.log("Here it is")
                            console.log(result.rows[0]);
                            if (result.rows[0].password === password) {
                                client.release();
                                var this_customer = {
                                    username: result.rows[0].username,
                                    email: result.rows[0].email,
                                    address: result.rows[0].address || "Vietnam",
                                    role: result.rows[0].role || "customer",
                                    full_name: result.rows[0].fullname || "Unknown-name",
                                    lastlogin: result.rows[0].lastlogin || "Unknown-time",
                                }
                                return done(null, this_customer);
                            }
                            client.release();
                            return done(null, false);
                        }
                    }))
                }
                catch (e) { throw (e); }
            };
        }
    ))

    app.post('/login/customer',
    passport.authenticate('full-login', {
        successRedirect: '/dashboard',
        failureRedirect: '/loginrequester_fail'
    }), function (req, res) {
        req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
    });

    app.get('/loginrequester_fail', function (req, res) {
        const mess = req.flash('login_fail', 'Đăng nhập thất bại. Hãy kiểm tra lại thông tin đăng nhập.');
        res.redirect('/loginrequester')
    });
    

}

