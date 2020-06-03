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

    app.get('/labeling/:name', function (req, res) {   
        if (req.isAuthenticated()) {       
            var user = new User(req.session.passport.user) 
            user.getScore().then(score => {
                if (user.isWorker()) {
                    pool.connect(function (err, client, done) {
                        if (err) {
                            return console.error(err);
                        }

                        var query = "select id, sentence from projects." + req.params.name + " ORDER BY id LIMIT 1 OFFSET " + score;

                        client.query(query, function (err, result) {
                            if (err) {
                                client.release();
                                return console.error(err);
                            }
                            client.release();
                            if(result.rows[0]==undefined){
                                res.render('labeling.ejs', { data: 'none', name: req.params.name });
                            }else{
                                res.render('labeling.ejs', { data: result.rows[0], name: req.params.name });
                            }
                            
                        });
                    })
                    // res.sendFile(path.join(__dirname, '../views/', 'worker_dashboard.html'));
                }
            }); 
        } else {
            res.redirect('/')
        }
    });

    app.post('/labeling', function (req, res) {   
        if (req.isAuthenticated()) {       
            var user = new User(req.session.passport.user);
            if(user.isWorker()) {
                pool.connect(function (err, client, done) { 

                    var query = "UPDATE projects."+ req.body.table +" SET array_user = array_append(array_user, $1), array_label = array_append(array_label, $2), array_time = array_append(array_time, $3) where id= $4";
                    client.query(query,[String(user.id),String(req.body.labeled_values),String(req.body.labeled_time),String(req.body.id)], function (err, result) {
                        if (err) {
                            client.release();
                            return console.error(err);
                            
                        }
                        client.release();
                        user.incrementScore(1).then( ()=>{                            
                            var path = "/labeling/"+req.body.table
                            res.redirect(path)
                        });
                        
                    });

                })
            }

        } else {
            res.redirect('/')
        }
    });
}