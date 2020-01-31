const http = require('http');
const url = require('url');

// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true)

// console.log(q.host)
// console.log(q.pathname)
// console.log(q.search)

var qdata = q.query;
console.log(qdata.month);

const hostname = '127.0.0.1';
const port = 8000;

const fs = require('fs');
// const data = fs.readFileSync('file.md');

const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})