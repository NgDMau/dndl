var path = require('path')

module.exports = function (app) {
    app.get('/signup', function (req, res) {
        res.render('signup.ejs')
    });
}