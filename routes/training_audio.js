var path = require('path');
var list = require('../public/js/questions_training/audio.js')

var Pool = require('pg-pool');
var User = require('../models/user')

var questions = list.questions

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: process.env.DB_SSL
});

module.exports = function (app) {
    app.get('/training_audio', function (req, res) {
        if (req.isAuthenticated()) {
            var listQuestion = [], numberQuestion = 20;
            shuffledQuestions(numberQuestion).then( function() {
                    res.render("training_audio.ejs", {list:listQuestion});

                }
            );
            async function shuffledQuestions(index){
                // This async call may fail.
                var shuffled = questions.sort(() => Math.random() - .5);
                for (var i = 0; i < index; i++) {
                  listQuestion.push(shuffled[i]);
                }

            }

        } else {
            res.redirect('/')
        }
    });

    app.post('/training_audio', function (req, res) {
        if (req.isAuthenticated()) {
            var user = new User(req.session.passport.user)
            if (user.role == "level_1") {
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }

                    client.query('UPDATE users SET role=$1 WHERE username=$2', ['level_2', user.username], function (err, result) {
                        if (err) {
                            client.release();
                            return console.error(err);
                        }
                        console.log("Updated to worker!")
                        client.release();
                        req.session.passport.user.role = "level_2"
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