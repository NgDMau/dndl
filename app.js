require('dotenv').config()
const express = require('express')
const path = require('path')
var Pool = require('pg-pool');

var flash = require("connect-flash");
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

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.use(session({
    key: 'user_id',
    secret: 'woot',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 1000 * 60 * 24 * 30
    }
}));

app.use(express.static('public'));
app.use(express.static('view'));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs')
app.set('view engine', 'pug')

require('./routes/text_sentiment')(app);
require('./routes/signup')(app);
require('./routes/login')(app);
require('./routes/forgotpass')(app);
require('./routes/about')(app);
require('./routes/dashboard')(app);
require('./routes/training_topic')(app);
require('./routes/training_audio')(app);
require('./routes/certificate')(app);
require('./routes/logout')(app);
require('./routes/result')(app);
require('./routes/upload')(app)
require('./routes/create_project')(app);
require('./routes/db-requester')(app);
require('./routes/user_management')(app);
require('./routes/upload')(app);
require('./routes/loginrequester')(app);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});