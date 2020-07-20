var path = require('path');
var list = require('../../public/js/questions_training/text_sentiment.js')
var User = require('../../models/user')
var Pool = require('pg-pool');

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  ssl: {rejectUnauthorized: false}
});

var questions = list.questions


var listQuestion = [], numberQuestion = 20;

shuffledQuestions(numberQuestion);

module.exports = function (app) {
  
  app.get('/text_sentiment', function (req, res) {
    
    if (req.isAuthenticated()) {
      var user = new User(req.session.passport.user)

      if ((user.role).split('_')[0] > "2" || user.role == "beginner" || user.role == "worker") {
        var listQuestion = [], numberQuestion = 20;
        shuffledQuestions(numberQuestion).then(function () {
          res.render("worker_views/text_sentiment.ejs", { list: listQuestion });
        }
        );
        async function shuffledQuestions(index) {
          // This async call may fail.
          var shuffled = questions.sort(() => Math.random() - .5);
          for (var i = 0; i < index; i++) {
            listQuestion.push(shuffled[i]);
          }
        }
      }else{
        res.redirect('/')
      }
      
    } else {
      res.redirect('/')
    }
  });

  app.post('/text_sentiment', function (req, res) {
    if (req.isAuthenticated()) {
      var user = new User(req.session.passport.user)
        if (user.role == "level_3") {
            pool.connect(function (err, client, done) {
                if (err) {
                    return console.error(err);
                }

                client.query('UPDATE users SET role=$1 WHERE username=$2', ['beginner', user.username], function (err, result) {
                    if (err) {
                        client.release();
                        return console.error(err);
                    }
                    client.release();
                    req.session.passport.user.role = "beginner";
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

function shuffledQuestions(index) {
  var shuffled = questions.sort(() => Math.random() - .5);
  for (var i = 0; i < index; i++) {
    listQuestion.push(shuffled[i]);
  }
}