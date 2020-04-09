const express = require('express');
const multer = require('multer');
const fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../breath'))
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
    console.log(req.file.path);
    var key = req.file.path.split("/");
    console.log(key[1]);
    var data = {
    };
    data[key[1]] = {
        "label": req.body.check
    }
    fs.appendFile(path.join(__dirname, '../breath/', '/data.json'), JSON.stringify(data), function(err) {
        if (err)
            throw err;
        console.log('complete');
    }
    );
    res.redirect('/upload');
});
}
