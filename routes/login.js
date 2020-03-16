var passport = require('passport');
var Pool = require('pg-pool')
var path = require('path')
var customStrategy = require('passport-custom').Strategy;

// var app = express();
const pool = new Pool({
    user: 'mpndhiboquobry',
    password: '92cf533ac275e9f7a116c6eb8e79477b3fa074679712bf8165a08f834db679f5',
    host: 'ec2-3-229-210-93.compute-1.amazonaws.com',
    port: '5432',
    database: 'd5tabqes3975',
    ssl: true
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
                    await JSON.stringify(client.query('SELECT "id", "username", "email", "address", "role" FROM "users" WHERE "username"=$1', [id], function (err, result) {
                        if (err) {
                            return done(err)
                        }
                        if (result.rows[0] == null) {
                            return done(null, false);
                        }
                        else {
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
            failureRedirect: '/login'
        }), function (req, res) {
            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
        });

    app.get('/login', function (req, res) {
        if (req.isAuthenticated()) {
            res.redirect('/dashbroad');
        } else {
            res.sendFile(path.join(__dirname, '../views/', 'login.html'))
        }
    });

}
