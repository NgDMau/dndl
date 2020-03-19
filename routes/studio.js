var path = require('path')

module.exports = function (app) {
    app.get('/studio', function (req, res) {
        res.sendFile(path.join(__dirname, '../views/', 'studio.html'));
    });
}