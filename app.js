const express = require('express')
const path = require('path')
const db = require('./local_modules/database')

var flash=require("connect-flash");
const session = require('express-session');
const bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

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
    secret: 'dndl',
    resave: false, 
    saveUninitialized: false}));

app.use(passport.initialize()); 
app.use(passport.session());


app.set('view engine', 'pug')



app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.static('view'));
app.use(flash());



app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/login'}));
var user_sample_data = {
    username: "ngdmau",
    current_income: 100000,
    current_jobs: ['text_sentiment', 'text_topic', 'audio_sentiment'],
    new_jobs: ['audio_topic', 'audio_gender'],
    no_current_jobs: 3,
    no_new_jobs: 2,
}


app.get('/', function (req, res) {
    if (req.isAuthenticated()) {
        //res.send(req.session.passport.user)
        // res.sendFile(path.join(__dirname, '/views/', 'dashboard.html'));
        res.render('dashboard', { username: req.session.passport.user, salary: '100.000', newjobs: "4", currentjobs:"5" })
        // res.sendFile(path.join(__dirname, '/views/', 'dashboard.html'));
        res.render('dashboard', user_sample_data)
        // res.sendFile(path.join(__dirname, '/views/', 'dashboard.html'));
        res.render('dashboard', user_sample_data)
    } else {
        res.redirect('/login')
        //res.render('dashboard');
    }
});

app.get('/dashboard', function (req, res) {
    if (req.isAuthenticated()) {
        
        res.sendFile(path.join(__dirname, '/views/', 'dashboard.html'));
        // res.sendFile('dashboard.html');
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

app.get('/idk', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'audio_sentiment.html'));
    // res.render('dashboard', { title: 'Hey', message: 'Hello there!' })
})

app.get('/login', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/views/', 'login.html'))
})

app.get('/login', function (req, res) {
    if (req.isAuthenticated()) {
        res.redirect('/')
    } else {
        res.sendFile(path.join(__dirname, '/views/', 'login.html'))
    }
})

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'about.html'))
});

app.get('/forgotpass', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'forgotpass.html'))
});

app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'signup.html'))
});

app.get('/demo', function(req, res) {
    res.render('demo');
})

app.get('/logout', function (req, res){
    req.session.destroy(function (err) {
      res.redirect('/'); //Inside a callback… bulletproof!
    });
});

app.listen(port, () => { console.log(`Example app listening on port ${port}` )})