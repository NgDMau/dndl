// require('dotenv').config()

const express = require('express')
const flash = require("connect-flash");
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

const app = express()

const port = process.env.PORT || 8004;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
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


app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.static('view'));

require('./routes/common_routes/index')(app);
require('./routes/common_routes/signup')(app);
require('./routes/common_routes/login')(app);
require('./routes/common_routes/forgotpass')(app);
require('./routes/common_routes/about')(app);
require('./routes/common_routes/dashboard')(app);
require('./routes/common_routes/certificate')(app);
require('./routes/common_routes/logout')(app);
require('./routes/common_routes/upload')(app)
require('./routes/manager_routes/user_management')(app);
require('./routes/common_routes/upload')(app);
require('./routes/common_routes/uploadresult')(app);
require('./routes/common_routes/loginrequester')(app);
require('./routes/common_routes/contact')(app);
require('./routes/common_routes/changepass')(app);
require('./routes/common_routes/contactsale')(app);
require('./routes/common_routes/verify')(app);
require('./routes/common_routes/info')(app);
require('./routes/common_routes/api')(app);

require('./routes/worker_routes/final_test')(app);
require('./routes/worker_routes/result')(app);
require('./routes/worker_routes/label')(app);
require('./routes/worker_routes/training_audio')(app);
require('./routes/worker_routes/training_topic')(app);
require('./routes/worker_routes/text_sentiment')(app);
require('./routes/worker_routes/create_project')(app);


// require('./routes/labeling')(app);
require('./routes/common_routes/dataset')(app);
require('./routes/common_routes/api')(app);
require('./routes/common_routes/treebank_sentiment')(app);
require('./routes/common_routes/project_manage')(app);
require('./routes/customer_routes/new_project')(app);
require('./routes/customer_routes/finish_project')(app);

require('./api/project_api')(app);
require('./api/review')(app);
require('./api/work')(app);



//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res) {
    res.status(404).render("common_views/error404.ejs")
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
