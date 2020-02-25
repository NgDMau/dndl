const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const Strategy = require('passport-http').BasicStrategy;
const cookieParser = require('cookie-parser');
const db = require('./local_modules/database')

const app = express();
const port = process.env.PORT || 8000;

passport.use(new Strategy(
    function(username, password, cb) {
        db.users.findByUsername(username, function(err, user) {
            if (err) { return cb(err); }
            if (!user) { return cb(null, false) }
            if (user.password != password) { return cb(null, false); }
            return cb(null, user);
        });
    }));

var logger = function(req, res, next) {
    console.log('Got Request!');
    console.log(req.originalUrl);
    next();
}

app.use(logger);
app.use(cookieParser("infore"))
app.use(session(
    {
      saveUninitialized: false,
      resave: false
    }
   ));

let users = {
    name: "Andy",
    age: "21"
}

app.get('/setuser', (req, res) => {
    res.cookie('cart', 'test');
    res.send(req.cookies);
    console.log(res.cookies)
});

app.get('/getuser', (req, res) => {
    res.send(req.cookies);
    console.log(req.cookies)
});

app.use(express.static('public'));
app.use(express.static('view'));

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, '/views/', 'index.html'));
});

app.get('/index', 
    passport.authenticate('basic', { session: true }),
    (req, res) => {
        res.json({username: req.user.username, email: req.user.emails[0].value });
    });

// app.get('/login',
//     passport.authenticate('basic'),
//     function(req, res) {
//         res.redirect('/users/' + req.user.username);
//     }    
// )

app.get('/about', function (req, res) {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, '/views/', 'about.html'))
});

app.get('/logout', function(req, res) {
    req.logout();
    req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }
    return res.send({ success: true });
    });
 });

app.get('/demo', function(req, res) {
    res.render('demo');
});


app.listen(port, () => console.log(`Example app listening on port ${port}`))