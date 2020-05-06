var path = require('path')

module.exports = function (app) {
    app.get('/db-requester-info', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', '.html'))
        res.render("db-requester-info.ejs")
    });
}