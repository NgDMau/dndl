const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8000;

var logger = function(req, res, next) {
    console.log('Got Request!');
    console.log(req.originalUrl);
    next();
}

app.use(logger);

app.use(express.static('public'));
app.use(express.static('view'));

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, '/views/', 'index.html'));
});

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '/views/', 'index.html'))
});

app.get('/about', function (req, res) {
    console.log(req.originalUrl);
    res.sendFile(path.join(__dirname, '/views/', 'about.html'))
});

app.get('/demo', function(req, res) {
    res.render('demo');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`))