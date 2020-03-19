var path = require('path')

module.exports = function (app) {
    app.get('/result', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', 'result.html'))
    });
}