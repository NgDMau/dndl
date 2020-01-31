const http = require('http');
const url = require('url');

// var adr = 'http://localhost:8080';
//  var q = url.parse(adr, true)

// // console.log(q.host)
//  console.log(q.pathname)
// // console.log(q.search)


const HOSTNAME = process.env.YOUR_HOST || '127.0.0.1';
const PORT = process.env.PORT || 8000;

const fs = require('fs');
// const data = fs.readFileSync('file.md');

const server = http.createServer((req, res) => {
    var q = url.parse(req.url, true);
    if (q.pathname == "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Hello, this is DNDL project<h1>");
        res.end();
        return 
    }
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

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}}:${PORT}/`);
})