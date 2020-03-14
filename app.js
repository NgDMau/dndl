const express = require('express')
const path = require('path')
const db = require('./local_modules/database')

var flash=require("connect-flash");
const session = require('express-session');
const bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var customStrategy = require('passport-custom').Strategy;

var pg = require('pg');
var Pool = require('pg-pool')

const config = {
    user: 'vvdicwtmvinosq',
    password: 'e9179f8811881a2e527c536030e0ac6d4c4eaee84cccbd35f1dd5d7c19769be8',
    host: 'ec2-18-235-97-230.compute-1.amazonaws.com',
    port: '5432',
    database: 'd9p7d0hvpi42ri',
    ssl: true
  };
  
const pool = new Pool(config); 



const app = express()
const port = process.env.PORT || 8000;

passport.use(new localStrategy(
    function(username, password, cb) {
        db.users.findByUsername(username, function(err, user) {
          if (err) { return cb(err); }
          if (!user) { return cb(null, false); }
          if (user.password != password) { return cb(null, false); }
          return cb(null, user);
        });
      }));

passport.use('id-only', new customStrategy(
    function(req, callback){
        var id = req.body.username;
        db.users.findByUsername(id, function(err, user){
            if (err) {return callback(err)}
            if (!user) {return callback(null, false)}
            return callback(null, user);
        })
    }
))

passport.serializeUser((user, done) => {
    done(null, user.username);
})

passport.deserializeUser((username, done) => {
    //tại đây hứng dữ liệu để đối chiếu
    db.users.findByUsername(username, function(err, user) {
        if (err) { return done(err); }
        done(null, user);
    })
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({  
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));

app.use(passport.initialize()); 
app.use(passport.session());
app.use(express.static('public'));
app.use(express.static('view'));
app.use(flash());

app.set('view engine', 'pug')

app.post('/login',
    passport.authenticate('id-only', { successRedirect: '/',
                                     failureRedirect: '/login'}));

// var user_sample_data = {
//     username: "ngdmau",
//     current_income: 100000,
//     current_jobs: ['text_sentiment', 'text_topic', 'audio_sentiment'],
//     new_jobs: ['audio_topic', 'audio_gender'],
//     no_current_jobs: 3,
//     no_new_jobs: 2,
// }


app.get('/', function (req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(path.join(__dirname, '/views/', 'dashboard.html'));
        //res.render('dashboard', user_sample_data)
    } else {
        res.redirect('/login')
    }
});

app.get('/dashboard', function (req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(path.join(__dirname, '/views/', 'dashboard.html'));
    } else {
        res.redirect('/login')
    }
});

app.get('/index', function (req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(path.join(__dirname, '/views/', 'index.html'));
    } else {
        res.redirect('/login')
    }
});

app.get('/training_audio', function (req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(path.join(__dirname, '/views/', 'training_audio.html'));
    } else {
        res.redirect('/login')
    }
});

app.get('/training_topic', function (req, res) {
    if (req.isAuthenticated()) {
        res.sendFile(path.join(__dirname, '/views/', 'training_topic.html'));
    } else {
        res.redirect('/login')
    }
});

app.get('/login', function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/')
    } else {
        res.sendFile(path.join(__dirname, '/views/', 'login.html'))
    }
    
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'about.html'))
});

app.get('/forgotpass', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'forgotpass.html'))
});

app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'signup.html'))
});
app.get('/login2', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'login2.html'))
});

app.get('/logout', function (req, res){
    req.session.destroy(function (err) {
      res.redirect('/'); //Inside a callback… bulletproof!
    });
});

app.listen(port, () => { console.log(`Example app listening on port ${port}` )});