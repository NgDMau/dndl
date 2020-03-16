var path = require('path')

module.exports = function (app) {
    app.get('/dashboard', function (req, res) {
        if (req.isAuthenticated()) {
            res.sendFile(path.join(__dirname, '../views/', 'dashboard.html'));
        } else {
            res.redirect('/login')
        }
    });
}