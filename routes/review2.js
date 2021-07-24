const db = require('../models/db');

module.exports = function(app) {
    app.get('/review2/project', function(req, res) {
      res.render('audio_review_2.ejs', {
        project_id: 0,
        reviewer_id: 0
      });
    })
}