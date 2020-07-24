module.exports = function (app) {
    app.get('/demo/image_polygons', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'info.html'))
        res.render("full_system/image_polygons.ejs");
    });
