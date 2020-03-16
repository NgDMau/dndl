var path = require('path')

module.exports = function (app) {
    app.get('/forgotpass', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', 'forgotpass.html'))
    });
}