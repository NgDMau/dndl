const express = require('express')
const app = express()
const port = process.env.PORT || 8000;

app.use(express.static('public'))

var path = require('path')
var fs = require('fs')

function displayPage(filename, req, res) {
    fs.readFile(filename, function (error, content) {
        res.send(content)
    })
}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/', 'index.html'))
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/', 'about.html'))
});



app.listen(port, () => console.log(`Example app listening on port ${port}`))