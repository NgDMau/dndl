var path = require('path')
var User = require('../models/user')
var Project = require('../models/project')
// var express = require('express')


module.exports = function (app) {
    // app.set('view engine', 'pug');

    app.get('/dashboard', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log(user)
            if (user.isCustomer()) {
                // var project_config = {
                //     name: "viettrann",
                //     id: "ahihi1",
                //     theme: "sentiment",
                //     rate: 4,
                //     starttime: '2011-01-01 00:00:00 +03',
                //     endtime: '2011-01-01 00:00:00 +03',
                //     datafile: "dataf.txt",
                //     priority: 3,
                //     uploadtime: '2011-01-01 00:00:00 +03',
                //     type: "text",
                //     owner_id:"tiendung",
                // }
                //var new_project = new Project(project_config);
                //new_project.register()
                //new_project.create();
                //new_project.destroy();
                var render_info = {
                    customerFullname: user.fullname,
                    actionSuccess: req.query.action,
                }

                res.render('cus_dashboard', render_info)
            } else {
                res.sendFile(path.join(__dirname, '../views/', 'dashboard.html'));
            }
            
        } else {
            res.redirect('/login')
        }
    });
}