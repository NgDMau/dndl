var path = require('path')

module.exports = function (app) {
    app.get('/logout', function (req, res) {
        req.session.destroy(function (err) {
            res.redirect('/'); //Inside a callback… bulletproof!
        });
    });
}