var path = require('path');
var list = require('../public/js/questions_training/text_sentiment.js')

var questions = list.questions

var listQuestion = [], numberQuestion = 20;

shuffledQuestions(numberQuestion);

module.exports = function ( app ) {
  app.get('/text_sentiment', function (req, res) {
    if (req.isAuthenticated()) {
      var listQuestion = [], numberQuestion = 20;
            shuffledQuestions(numberQuestion).then( function() {
                    res.render("text_sentiment.ejs", {list:listQuestion});
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

function shuffledQuestions(index) {
  var shuffled = questions.sort(() => Math.random() - .5);
  for (var i = 0; i < index; i++) {
    listQuestion.push(shuffled[i]);
  }
}