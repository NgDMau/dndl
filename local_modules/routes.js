var fs = require('fs');
var request = require('request');
var express = require('express');
var app = express();
var path = require("path");
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var customStrategy = require('passport-custom').Strategy;

app.use(express.static('public'));

var Client  = require('pg');
var Pool = require('pg-pool')

var currentAccountsData = [];

const pool = new Pool({
    user: 'mpndhiboquobry',
    password: '92cf533ac275e9f7a116c6eb8e79477b3fa074679712bf8165a08f834db679f5',
    host: 'ec2-3-229-210-93.compute-1.amazonaws.com',
    port: '5432',
    database: 'd5tabqes3975',
    ssl: true
});

module.exports = function (app) {

    app.post('/login',
        passport.authenticate('id-only', { 
            successRedirect: '/dashboard',
            failureRedirect: '/login'
        }), function(req, res) {
            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
    });


    app.get('/', function (req, res) {
        if (req.isAuthenticated()) {
            res.sendFile(path.join(__dirname, '../views/', 'dashboard.html'));
            //res.render('dashboard', user_sample_data)
        } else {
            res.redirect('/login')
        }
    });
    

    app.get('/dashboard', function (req, res) {
        if (req.isAuthenticated()) {
            res.sendFile(path.join(__dirname, '../views/', 'dashboard.html'));
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

    app.get('/training_audio', function (req, res) {
        if (req.isAuthenticated()) {
            res.sendFile(path.join(__dirname, '../views/', 'training_audio.html'));
        } else {
            res.redirect('/login')
        }
    });

    app.get('/training_topic', function (req, res) {
        if (req.isAuthenticated()) {
            res.sendFile(path.join(__dirname, '../views/', 'training_topic.html'));
        } else {
            res.redirect('/login')
        }
    });

    app.post('/training_topic', function (req, res) {       
        if (req.isAuthenticated()) {
            if(req.session.passport.user.role == "beginner"){
                pool.connect(function(err, client, done){
                    if(err){
                        return console.error(err);
                    }
    
                    client.query('UPDATE users SET role=$1 WHERE username=$2', ['worker', req.session.passport.user.username],function(err, result) {
                        if(err){
                            return console.error(err);
                        }
                        req.session.passport.user.role == "worker"
                        res.redirect('/')
                    });
                })   
            }
        } else {
            res.redirect('/login')
        }
    });

    app.get('/login', function (req, res) {
        if (req.isAuthenticated()) {
			res.redirect('/dashbroad');
        } else {
            res.sendFile(path.join(__dirname, '../views/', 'login.html'))
        }
        
    });

    app.get('/about', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', 'about.html'))
    });

    app.get('/forgotpass', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', 'forgotpass.html'))
    });

    app.get('/signup', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', 'signup.html'))
    });

    app.get('/logout', function (req, res){
        req.session.destroy(function (err) {
        res.redirect('/'); //Inside a callback… bulletproof!
        });
    });
}

passport.use('id-only', new customStrategy(
    function(req, done){
        var id = req.body.username;
        loginAttempt();
        async function loginAttempt() {
            
            
            const client = await pool.connect()
            try{
                await client.query('BEGIN')
                var currentAccountsData = await JSON.stringify(client.query('SELECT "id", "username", "email", "address", "role" FROM "users" WHERE "username"=$1', [id], function(err, result) {
                    if(err) {
                        return done(err)
                    }	
                    if(result.rows[0] == null){
                        return done(null, false);
                    }
                    else{
                        return done(null, result.rows[0]);

                    }
                }))
            }
            
            catch(e){throw (e);}
        };
    }
))

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});	