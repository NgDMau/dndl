var path = require('path')

module.exports = function (app) {
    app.get('/project_manage/finish_project', function (req, res) {
        res.render("customer_views/finish_project.ejs")
    });
}