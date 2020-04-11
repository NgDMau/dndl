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
app.get('/uploadnew', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/', '/uploadnew.html'));
});
app.post('/uploadnew', upload.single('file'), (req, res) => {
    try {
        var key = req.file.path.split("/");
        var data = {
        };
        console.log(key);
        if (req.body.check != undefined) {
            data[key[key.length - 1]] = {
                "label": req.body.check
            }
            fs.appendFile(path.join(__dirname, '../breathe/', '/data.json'), JSON.stringify(data), function(err) {
                if (err)
                    throw err;
            }
            );
            res.sendFile(__dirname, '../views/', '/success_upload.html');
        } else {
            fs.unlinkSync(req.file.path);
            res.sendFile(__dirname, '../views/', '/error_upload.html');

        }

    } catch ( error ) {
        res.sendFile(__dirname, '../views/', '/error_upload.html');
    }
});
}
