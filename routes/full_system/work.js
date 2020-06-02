var path = require('path')

module.exports = function (app) {
    app.get('/label_work', function (req, res) {
        res.render("full_system/worker_labeling_ui.ejs")
    });
}