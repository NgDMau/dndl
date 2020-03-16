
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var CustomStrategy = require('passport-custom').Strategy;
var db = require('../../local_modules/database')

module.exports = function () {
    passport.use(new LocalStrategy(
        function (username, password, cb) {
            db.users.findByUsername(username, function (err, user) {
                if (err) { return cb(err); }
                if (!user) { return cb(null, false); }
                if (user.password != password) { return cb(null, false); }
                return cb(null, user);
            });
        }));

    passport.use('id-only', new CustomStrategy(
        function (req, callback) {
            var id = req.body.username;
            db.users.findByUsername(id, function (err, user) {
                if (err) { return callback(err) }
                if (!user) { return callback(null, false) }
                return callback(null, user);
            })
        }));
}