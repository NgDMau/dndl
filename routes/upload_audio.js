var path = require('path')

module.exports = function (app) {
    app.get('/upload_audio', function (req, res) {
        // res.sendFile(path.join(__dirname, '../views/', 'upload_audio.html'))
        res.render("upload_audio.ejs")
    });

    app.post('/upload_audio', upload.single('file'), (req, res) => {
        try {
            var key = req.file.path.split("/");
            var data = {
            };
            //console.log(req.body);
            if (req.body) {
                data[key[key.length - 1]] = {
                    description: req.body.description,
                    health: req.body.health,
                    email: req.body.email,
                    age: req.body.age,
                    gender: req.body.gender
                }
                fs.appendFile(path.join(__dirname, '../audio/', '/data.txt'), JSON.stringify(data), function(err) {
                    if (err)
                        throw err;
                }
                );
                res.redirect("/uploadresult")
                console.log("UPLOADED SUCCESSFULLY");
    
            } else {
                console.log(req.body)
                //console.log(req.file.path);
                fs.unlinkSync(req.file.path);
                res.send("ERROR!!")
            }
    
        } catch ( error ) {
            console.log("WRONGGGG")
            // res.sendFile(path.join(__dirname, '../views/', '/upload.html'));
            res.render("upload.ejs")
        }
    });
}