var path = require('path')

module.exports = function (app) {
    app.get('/result', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'result.html'))
        res.render("result.ejs")
    });
    app.get('/1st_result', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', '1st_result.html'))
        res.render("1st_result.ejs")
    });
    app.get('/2nd_result', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', '2nd_result.html'))
        res.render("2nd_result.ejs")
    });
    app.get('/3rd_result', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', '3rd_result.html'))
        res.render("3rd_result.ejs")
    });
}