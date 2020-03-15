const express = require('express')
const path = require('path')

var flash=require("connect-flash");
const session = require('express-session');
const bodyParser = require('body-parser');
var passport = require('passport');

var cookieParser = require('cookie-parser');

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});	

const app = express()

const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.use(session({  
    key: 'user_id',
    secret: 'woot',
    resave: false, 
    saveUninitialized: false,
    cookie: {
        expires: 60 * 1000 * 60 * 24 * 30
    }}));

app.use(express.static('public'));
app.use(express.static('view'));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

require('./local_modules/routes.js')(app);

app.set('view engine', 'pug')



app.listen(port, () => { console.log(`Example app listening on port ${port}` )});