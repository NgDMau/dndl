const express = require('express')
const path = require('path')
const db = require('./local_modules/database')

var flash=require("connect-flash");
var session = require('express-session');
const bodyParser = require('body-parser');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

const app = express()
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize()); 

// var logger = function(req, res, next) {
//     console.log('Got Request!');
//     console.log(req.originalUrl);
//     next();
// }

// app.use(logger);

passport.use(new localStrategy(
    function(username, password, done) {
        // db.users.findByUsername(username, function(err, user) {
        //     if (err) { return cb(err); }
        //     if (!user) { return cb(null, false, { message: 'Incorrect username.' }) }
        //     if (user.password != password) { 
        //         return cb(null, false, { message: 'Incorrect password.' }); }
        //     return cb(null, user);
        if (username == 'mau') {
            if (password == 'infore2811') {
                return done(null, username)
            } else {
                return done(null, false);
            }
        } else {
            return done(null, false);
        }
    })
);

passport.serializeUser((username, done) => {
    done(null, username);
})

passport.deserializeUser((name, done) => {
    //tại đây hứng dữ liệu để đối chiếu
    if (name == 'mau') { //tìm xem có dữ liệu trong kho đối chiếu không
        return done(null, name)
    } else {
        return done(null, false)
    }
})

app.use(flash());
app.use(session({  
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));
app.use(passport.session());

app.use(express.static('public'));
app.use(express.static('view'));

app.set('view engine', 'pug')

app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/login',}));

app.get('/', function (req, res) {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, '/views/', 'index.html'));
});

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'index.html'))
});

app.get('/about', function (req, res) {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, '/views/', 'about.html'))
});
app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'login.html'))
});
app.get('/forgotpass', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'forgotpass.html'))
});
app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'signup.html'))
});

// app.get('/demo', function(req, res) {
//     res.render('demo');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}`))