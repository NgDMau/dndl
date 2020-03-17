var path = require('path');

module.exports = function (app) {
    app.get('/training_audio', function (req, res) {
        if (req.isAuthenticated()) {
            res.sendFile(path.join(__dirname, '../views/', 'training_audio.html'));
        } else {
            res.redirect('/login')
        }
    });
}