
var express = require('express');
var authRouter = express.Router();
var passport = require('passport');
var path = require('path');

authRouter.post('/login', 
    passport.authenticate('id-only', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

authRouter.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '/../views/', 'login2.html'));
});

module.exports = authRouter;
