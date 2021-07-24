const fetch = require('node-fetch');

fetch('http://10.2.50.231:5000/article/get/69')
.then(response => response.json())
.then(data => console.log(data))
