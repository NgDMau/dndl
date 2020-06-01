var path = require('path')

module.exports = function (app) {
    app.get('/contactsale', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'contact-sale.html'))
        res.render("contact-sale.ejs")
    });
}