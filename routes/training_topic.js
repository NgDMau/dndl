var path = require('path');
var Pool = require('pg-pool');
var list = require('../public/js/questions_training/text_topic.js')

var questions = list.questions

var listQuestion = [], numberQuestion = 20;

shuffledQuestions(numberQuestion);

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
            res.render("training_topic.ejs", {list:listQuestion});
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
                            client.release();
                            return console.error(err);
                        }
                        console.log("Updated to worker!")
                        client.release();
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

function shuffledQuestions(index) {
    var shuffled = questions.sort(() => Math.random() - .5);
    for (var i = 0; i < index; i++) {
      listQuestion.push(shuffled[i]);
    }
}