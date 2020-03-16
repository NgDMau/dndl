var express = require('express');
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

  app.get('/index', function (req, res) {
    if (req.isAuthenticated()) {
      res.sendFile(path.join(__dirname, '../views/', 'index.html'));
    } else {
      res.redirect('/login')
    }
  });
  
}