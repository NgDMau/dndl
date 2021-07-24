var path = require('path')

module.exports = function (app) {
    app.get('/about', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'about.html'))
        res.render("about.ejs")
    });
}