var path = require('path')

module.exports = function (app) {
    app.get('/loginrequester', function (req, res) {
        res.render('common_views/loginrequester.ejs')
    });
}