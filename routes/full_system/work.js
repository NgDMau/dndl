var path = require('path')

module.exports = function (app) {
    app.get('/label_work', function (req, res) {
        if (req.isAuthenticated()) {
            res.render("full_system/worker_labeling_ui.ejs")
        } else {
            res.redirect('/login');
        }
    });
}