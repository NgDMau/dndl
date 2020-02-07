const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8000;

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/', 'index.html'))
});

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '/', 'index.html'))
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/', 'about.html'))
});

app.listen(port, () => console.log(`Example app listening on port ${port}`))