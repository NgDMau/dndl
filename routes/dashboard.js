var path = require('path')
var User = require('../models/user')
var express = require('express')


module.exports = function (app) {
    // app.set('view engine', 'pug');

    app.get('/dashboard', function (req, res) {
        if (req.isAuthenticated()) {
            console.log
            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isCustomer()) {
                res.render('cus_dashboard', {customerFullname: user.fullname})
            } else {
                res.sendFile(path.join(__dirname, '../views/', 'dashboard.html'));
            }
            
        } else {
            res.redirect('/login')
        }
    });
}