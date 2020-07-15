var path = require('path')

module.exports = function (app) {
    app.get('/project_manage', function (req, res) {
        res.render("project_manage.ejs")
    });
}