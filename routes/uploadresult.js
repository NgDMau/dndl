var path = require('path')

module.exports = function (app) {
    app.get('/uploadresult', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'uploadresult.html'))
        res.render("uploadresult.ejs")
    });
}