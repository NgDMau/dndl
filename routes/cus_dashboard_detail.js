var path = require('path')

module.exports = function (app) {
    app.get('/cus_dashboard_detail', function (req, res) {
        res.render('cus_dashboard_detail.pug')
    });
}