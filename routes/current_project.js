var path = require('path')

module.exports = function (app) {
    app.get('/project_manage/current_project', function (req, res) {
        res.render("current_project.ejs")
    });
}