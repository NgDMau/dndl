const express = require('express');
const multer = require('multer');
const fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../breathe'))
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
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
        console.log(req.body);
        if (String(req.body.description) != undefined && String(req.body.health) != undefined && String(req.body.email) != "") {
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
            res.sendFile(path.join(__dirname, '../views/', '/upload.html'));
        } else {
            console.log(req.file.path);
            fs.unlinkSync(req.file.path);
        }

    } catch ( error ) {
        res.sendFile(path.join(__dirname, '../views/', '/upload.html'));
    }
});
}
