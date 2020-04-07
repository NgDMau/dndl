var passport = require('passport');
var Pool = require('pg-pool')
var path = require('path')
var customStrategy = require('passport-custom').Strategy;

// var app = express();
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: false//(process.env.DB_SSL == 'true')
});

module.exports = function (app) {
    

    passport.use('id-only', new customStrategy(
        function (req, done) {
            var id = req.body.username;
            loginAttempt();
            async function loginAttempt() {

                const client = await pool.connect()
                try {
                    await client.query('BEGIN')
                    await JSON.stringify(client.query('SELECT "id", "username", "email", "address", "role", "full_name" FROM "users" WHERE "username"=$1', [id], function (err, result) {
                        if (err) {
                            return done(err)
                        }
                        if (result.rows[0] == null) {
                            return done(null, false);
                        }
                        else {
                            let res = client.query("UPDATE users SET last_login=(SELECT now() ::timestamp AT TIME ZONE 'GMT+7') WHERE username=($1)", [result.rows[0]]);
                            console.log(res);
                            client.release();
                            return done(null, result.rows[0]);
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

    app.post('/login',
        passport.authenticate('id-only', {
            successRedirect: '/dashboard',
            failureRedirect: '/login_fail'
        }), function (req, res) {
            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
        });

    app.get('/login', function (req, res) {
        console.log(pool)
        if (req.isAuthenticated()) {
            res.redirect('/dashboard');
        } else {
            const mess = req.flash('login_fail');
            res.render('login.ejs', {mess:mess} )
        }
    });

    app.get('/login_fail', function (req, res) {
        const mess = req.flash('login_fail', 'Đăng nhập thất bại. Hãy kiểm tra lại tên đăng nhập.');
        res.redirect('/login')
    });
    

}

