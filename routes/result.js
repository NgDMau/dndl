var path = require('path')

module.exports = function (app) {
    app.get('/result', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', 'result.html'))
    });
    app.get('/1st_result', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', '1st_result.html'))
    });
    app.get('/2nd_result', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', '2nd_result.html'))
    });
    app.get('/3rd_result', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', '3rd_result.html'))
    });
}