var path = require('path')

module.exports = function (app) {
    app.get('/forgotpass', function (req, res) {
        res.render('forgot.ejs')
    });
}