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
        if (String(req.body.check) == 'true' || String(req.body.check) == 'false') {
            data[key[key.length - 1]] = {
                "label": req.body.check
            }
            fs.appendFile(path.join(__dirname, '../breathe/', '/data.json'), JSON.stringify(data), function(err) {
                if (err)
                    throw err;
            }
            );
            res.sendFile(__dirname, '../views/', '/upload.html');
        } else {
            fs.unlinkSync(req.file.path);
            // res.sendFile(__dirname, '../views/', '/error_upload.html');

        }

    } catch ( error ) {
        res.sendFile(__dirname, '../views/', '/upload.html');
    }
});
}
