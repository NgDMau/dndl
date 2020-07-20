var path = require('path')
var User = require('../models/user')
var Project = require('../models/project')
const db = require("../models/db");
// var express = require('express')

var Pool = require('pg-pool')
const flash = require('connect-flash');

// const pool = 

const pool = db.getPgPool();

module.exports = function (app) {
    app.get('/work', function (req, res) {
        if (req.isAuthenticated()) {       
            var user = new User(req.session.passport.user)   
            if(user.isWorker()) {
                var name_array = user.fullname.split();
                var name = name_array[name_array.length - 1]
                pool.connect(function (err, client, done) {
                    if (err) {
                        return console.error(err);
                    }

                    client.query('select *,count(id) from projects_metadata where name=$1', [req.param('name')], function (err, result) {
                        if (err) {
                            client.release();
                            return console.error(err);
                        }
                        client.release();
                        console.log(result)
                        res.render('worker_views/work.ejs', {data: result});
                    });
                })
                // res.sendFile(path.join(__dirname, '../views/', 'worker_dashboard.html'));
            }
        } else {
            res.redirect('/')
        }
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
                        res.render('worker_views/list_work.ejs', {list: result});
                    });
                })
                // res.sendFile(path.join(__dirname, '../views/', 'worker_dashboard.html'));
            }
        } else {
            res.redirect('/login')
        }
    });

}