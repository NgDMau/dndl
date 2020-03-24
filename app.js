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

// apply routes to the web
require('./routes/index')(app);
require('./routes/signup')(app);
require('./routes/login')(app);
require('./routes/forgotpass')(app);
require('./routes/about')(app);
require('./routes/about2')(app);
require('./routes/dashboard')(app);
require('./routes/training_topic')(app);
require('./routes/training_audio')(app);
require('./routes/certificate')(app);
require('./routes/logout')(app);
require('./routes/result')(app);
require('./routes/result2')(app);



app.set('view engine', 'pug') 

app.listen(port, () => { console.log(`Example app listening on port ${port}` )});