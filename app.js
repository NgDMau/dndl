var express = require('express');
var path = require("path");

//reponse login

var app = express();

app.use(express.static(path.join(__dirname, ".")));

app.get('/about', function (req, res) {

	res.sendFile( path.join(__dirname, 'about.html'));

})

app.get('/index', function (req, res) {

	res.sendFile( path.join(__dirname, 'index.html'));

})

var app = app.listen(8000, function () {

  var host = app.address().address
  var port = app.address().port


})