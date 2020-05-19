var path = require('path');
var Pool = require('pg-pool');
var list = require('../public/js/questions_training/text_topic.js')

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
    app.get('/final_test', function (req, res) {
        if (req.isAuthenticated()) {
            if (req.session.passport.user.role == "worker") {

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
            console.log(req.session.passport.user.role)
            if (req.session.passport.user.role == "worker") {

            } else {
                res.redirect('/')
            }
        } else {
            res.redirect('/')
        }
    });

}