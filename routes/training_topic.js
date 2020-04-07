var path = require('path');
var Pool = require('pg-pool');

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: process.env.DB_SSL
});

module.exports = function (app) {
    app.get('/training_topic', function (req, res) {
        if (req.isAuthenticated()) {
            res.sendFile(path.join(__dirname, '../views/', 'training_topic.html'));
        } else {
            res.redirect('/login')
        }
    });

    app.post('/training_topic', function (req, res) {
        if (req.isAuthenticated()) {
            console.log(req.session.passport.user.role)
            if (req.session.passport.user.role == "beginner") {
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }

                    client.query('UPDATE users SET role=$1 WHERE username=$2', ['worker', req.session.passport.user.username], function (err, result) {
                        if (err) {
                            return console.error(err);
                        }
                        req.session.passport.user.role == "worker"
                        res.redirect('/')
                    });
                })
            } else {
                res.redirect('/')
            }
        } else {
            res.redirect('/')
        }
    });

}