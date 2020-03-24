var path = require('path')
var User = require('../models/user')
var Project = require('../models/project')
var express = require('express')


module.exports = function (app) {
    // app.set('view engine', 'pug');

    app.get('/dashboard', function (req, res) {
        if (req.isAuthenticated()) {
            console.log
            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isCustomer()) {
                var project_config = {
                    name: "tranbiu",
                    type: "sentiment"
                }
                var new_project = new Project(project_config);
                new_project.create().then(console.log)
                res.render('cus_dashboard', {customerFullname: user.fullname})
            } else {
                res.sendFile(path.join(__dirname, '../views/', 'dashboard.html'));
            }
            
        } else {
            res.redirect('/login')
        }
    });
}