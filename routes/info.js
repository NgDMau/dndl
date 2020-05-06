var path = require('path')

module.exports = function (app) {
    app.get('/info', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'info.html'))
        res.render("info.ejs")
    });
}