var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var path = require('path');
const express = require('express');
const db = require('./local_modules/database')
var flash=require("connect-flash");
var session = require('express-session');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize()); 

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


app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
                                     failureRedirect: '/login',
                                     }));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'testLogin.html'));
})

app.get('/', (req, res) => {
    res.send("Xin chao");
})

app.listen(3000, () => console.log(`Example app listening on port 3000`))