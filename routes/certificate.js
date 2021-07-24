var path = require('path')

module.exports = function (app) {
    app.get('/certificate', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'certificate.html'))
        res.render("certificate.ejs")
    });
}