const db = require('db_module');

let randomSentence = db.getRandomSentence();
randomSentence.then(function(result) {
  console.log(randomSentence);
});
