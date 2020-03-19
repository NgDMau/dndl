var path = require('path')

module.exports = function (app) {
    app.get('/result2', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', 'result2.html'))
    });
}