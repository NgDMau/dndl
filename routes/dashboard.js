var path = require('path')
var User = require('../models/user')
var Project = require('../models/project')
// var express = require('express')


module.exports = function (app) {
    app.set('view engine', 'pug');

    app.get('/dashboard', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)

            if (user.isCustomer()) {

                user.getAllProjectsInfo(user.username)
                .then((result) => {

                    var render_info = {
                        customerFullname: user.fullname,
                        actionSuccess: req.query.action,
                        userProjects: JSON.stringify(result.rows)
                    }

                    res.render('cus_dashboard', render_info)
                })

                
            } 

            if(user.isMod()) {
                res.redirect('/user_management');
            } 
            if(user.isWorker()) {
                res.render('dashboard');
                //res.sendFile(path.join(__dirname, '../views/', 'dashboard.html'));
            }
            if(user.isBeginner()) {
                res.render('dashboard.ejs');
            }
            
            
        } else {
            res.redirect('/login')
        }
    });
}