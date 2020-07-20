var path = require('path')

module.exports = function (app) {
    app.get('/project_manage/new_project', function (req, res) {
        res.render("customer_views/new_project.ejs")
    });
}