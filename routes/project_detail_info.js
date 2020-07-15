var path = require('path')

module.exports = function (app) {
    app.get('/project_manage/project_detail', function (req, res) {
        res.render("project_detail_info.ejs")
    });
}