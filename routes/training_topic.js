var path = require('path');
var Pool = require('pg-pool');

const pool = new Pool({
    user: 'mpndhiboquobry',
    password: '92cf533ac275e9f7a116c6eb8e79477b3fa074679712bf8165a08f834db679f5',
    host: 'ec2-3-229-210-93.compute-1.amazonaws.com',
    port: '5432',
    database: 'd5tabqes3975',
    ssl: true
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