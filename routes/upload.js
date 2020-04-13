const express = require('express');
const multer = require('multer');
const fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../breathe'))
    },
    filename: function(req, file, cb) {
        var parts = file.originalname.split('.') || ['unknown','extension'];
        var extension = parts[parts.length - 1];
        var filename = parts[0] + '-' + Date.now() + '.' + extension;
        console.log('Saving file: ',filename);
        cb(null, filename);
    }
})

var upload = multer({
    storage: storage
})

module.exports = function(app) {
app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/', '/upload.html'));
});
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        var key = req.file.path.split("/");
        var data = {
        };
        //console.log(req.body);
        if (req.body) {
            data[key[key.length - 1]] = {
                "description": req.body.description,
                "health": req.body.health,
                "email": req.body.email
            }
            fs.appendFile(path.join(__dirname, '../breathe/', '/data.json'), JSON.stringify(data), function(err) {
                if (err)
                    throw err;
            }
            );
            console.log("UPLOADED SUCCESSFULLY");
            res.redirect('/uploadresult');

        } else {
            console.log(req.body)
            //console.log(req.file.path);
            fs.unlinkSync(req.file.path);
            res.send("ERROR!!")
        }

    } catch ( error ) {
        res.sendFile(path.join(__dirname, '../views/', '/upload.html'));
    }
});
}
