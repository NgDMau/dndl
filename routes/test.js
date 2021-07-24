module.exports = function (app) {

    app.post('/test', function (req, res) {
        console.log("------+++")
        console.log((req.body))
        console.log("=========")
        res.render('test.ejs');
    });

    app.get('/test', function (req, res) {
        res.render('test.ejs');
    })
}