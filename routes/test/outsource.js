var path = require('path')

module.exports = function (app) {
    app.get('/outsource', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'about.html'))
        res.render("test/requirements.ejs")
    });
}