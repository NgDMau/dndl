var path = require('path')

module.exports = function (app) {
    app.get('/db-requester', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'db-requester.html'))
        res.render("db-request.ejs")
    });
}