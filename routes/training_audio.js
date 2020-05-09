var path = require('path');
var list = require('../public/js/questions_training/audio.js')

var questions = list.questions

module.exports = function (app) {
    app.get('/training_audio', function (req, res) {
        if (req.isAuthenticated()) {
            var listQuestion = [], numberQuestion = 20;
            shuffledQuestions(numberQuestion).then( function() {
                    res.render("training_audio.ejs", {list:listQuestion});
                    console.log("aaaa")
                    console.log(listQuestion)
                }
            );
            async function shuffledQuestions(index){
                // This async call may fail.
                var shuffled = questions.sort(() => Math.random() - .5);
                for (var i = 0; i < index; i++) {
                  listQuestion.push(shuffled[i]);
                }
                console.log("1")
            }

        } else {
            res.redirect('/login')
        }
    });
}