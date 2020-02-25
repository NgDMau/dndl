const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 8000;

var logger = function(req, res, next) {
    console.log('Got Request!');
    console.log(req.originalUrl);
    next();
}

app.use(logger);
app.use(cookieParser())

let users = {
    name: "Andy",
    age: "21"
}

app.get('/setuser', (req, res) => {
    res.cookie('cart', 'test');
    res.send(req.cookies);
    console.log(res.cookies)
});

app.get('/getuser', (req, res) => {
    res.send(req.cookies);
    console.log(req.cookies)
});

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