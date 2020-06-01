var path = require('path');
var Pool = require('pg-pool');
var list = require('../public/js/questions_training/final_test.js')
var User = require('../models/user')

var questions = list.questions
console.log(questions)

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: process.env.DB_SSL
});

module.exports = function (app) {
    app.get('/final_test', function (req, res) {
        if (req.isAuthenticated()) {
            var user = new User(req.session.passport.user)
            if (user.role == "beginner" || user.role == "worker") {

                var listQuestion = [], numberQuestion = 10;
                shuffledQuestions(numberQuestion).then(function () {
                    res.render("final_test.ejs", { list: listQuestion });
                }
                );
                async function shuffledQuestions(index) {
                    // This async call may fail.
                    var shuffled = questions.sort(() => Math.random() - .5);
                    for (var i = 0; i < index; i++) {
                        listQuestion.push(shuffled[i]);
                    }
                }


            } else {
                res.redirect('/')
            }

        } else {
            res.redirect('/')
        }
    });

    app.post('/final_test', function (req, res) {
        if (req.isAuthenticated()) {
            var user = new User(req.session.passport.user)
            if (user.role == "beginner") {
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }

                    client.query('UPDATE users SET role=$1 WHERE username=$2', ['worker', user.username], function (err, result) {
                        if (err) {
                            client.release();
                            return console.error(err);
                        }
                        client.release();
                        req.session.passport.user.role == "worker"
                        res.redirect('/dashboard')
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