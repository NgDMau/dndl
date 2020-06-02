var path = require('path')
var User = require('../models/user')
var Project = require('../models/project')
// var express = require('express')

var Pool = require('pg-pool')
const flash = require('connect-flash');

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    ssl: process.env.DB_SSL
});

module.exports = function (app) {
    app.get('/work', function (req, res) {     
        if(req.isAuthenticated()) {
            if (req.body.id) {
                const project_id = req.body.id;
                const user = new User(req.session.passport.user);

            } 
        }
        res.render("about.ejs")  
    });

    app.get('/work/list', function (req, res) {    
        if (req.isAuthenticated()) {

            var user = new User(req.session.passport.user)   
            if(user.isWorker()) {
                var name_array = user.fullname.split();
                var name = name_array[name_array.length - 1]
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }

                    client.query('select * from projects_metadata order by starttime', function (err, result) {
                        if (err) {
                            client.release();
                            return console.error(err);
                        }
                        client.release();
                        res.render('list_work.ejs', {list: result});
                    });
                })
                // res.sendFile(path.join(__dirname, '../views/', 'worker_dashboard.html'));
            }
        } else {
            res.redirect('/login')
        }
    });
}