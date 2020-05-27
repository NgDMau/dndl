var path = require('path')
var User = require('../models/user')
var Project = require('../models/project')
var passport = require('passport');
const session = require('express-session');
// var express = require('express')

var Pool = require('pg-pool')
const flash = require('connect-flash');

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl:  { rejectUnauthorized: false }
});


module.exports = function (app) {

    passport.serializeUser(function(user, done) { done(null, user); });
    passport.deserializeUser(function(obj, done) { done(null, obj); });

    app.set('view engine', 'ejs');

    app.get('/dashboard', function (req, res) {
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)
            console.log("user here")
            console.log(user)
            console.log("---------")

            if (user.isCustomer()) {

                user.getAllProjectsInfo(user.username)
                .then((result) => {

                    var render_info = {
                        customerFullname: user.fullname,
                        actionSuccess: req.query.action,
                        userProjects: JSON.stringify(result.rows)
                    }

                    res.render('customer_dashboard.ejs', render_info)
                })

                
            } 

            if(user.isMod()) {
                res.redirect('/user_management');
            } 

            if(user.isWorker()) {
                var name_array = user.fullname.split();
                var name = name_array[name_array.length - 1]
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }

                    client.query('select * from projects_metadata order by starttime desc limit 10', function (err, result) {
                        if (err) {
                            client.release();
                            return console.error(err);
                        }
                        client.release();
                        res.render('worker_dashboard.ejs', {list: result});
                    });
                })
                // res.sendFile(path.join(__dirname, '../views/', 'worker_dashboard.html'));
            }

            // if(user.isBeginner()) {
            //     var name_array = user.fullname.split(" ");
            //     var name = name_array[name_array.length - 1]
            //     res.render('dashboard.ejs', {name: name});
            // }
            
            if(user.isNewbie() || user.isBeginner()) {
                user = new User(req.session.passport.user)
                console.log(user);
                res.render('dashboard.ejs', {name: name, level: user.role});
            }
            
        } else {
            res.redirect('/login')
        }
    });
}