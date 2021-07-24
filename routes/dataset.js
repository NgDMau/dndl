var path = require('path')

module.exports = function (app) {
    app.get('/resources/dataset', function (req, res) {
        res.render("dataset.ejs")
    });
}