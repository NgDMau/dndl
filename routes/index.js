var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.body.username) {
    res.redirect('/login')
    res.sendFile(path.join(__dirname, '/../views/', 'login2.html'));
  } else {
    res.sendFile(path.join(__dirname, '/../views/', 'dashboard.html'));
  }
})

module.exports = router;
