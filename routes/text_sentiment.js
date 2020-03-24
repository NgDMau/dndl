var path = require('path');

module.exports = function ( app ) {
  app.get('/', function (req, res) {
    if (req.isAuthenticated()) {
      res.sendFile(path.join(__dirname, '../views/', 'dashboard.html'));
      //res.render('dashboard', user_sample_data)
    } else {
      res.redirect('/login')
    }
  });

  app.get('/text_sentiment', function (req, res) {
    if (req.isAuthenticated()) {
      res.sendFile(path.join(__dirname, '../views/', 'text_sentiment.html'));
    } else {
      res.redirect('/login')
    }
  });

}