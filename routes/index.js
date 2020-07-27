var path = require('path')

module.exports = function (app) {
    app.get('/', function (req, res) {
        //res.sendFile(path.join(__dirname, '../views/', 'about.ejs'))
        console.log(req)
        res.render('about.ejs')
    });
}