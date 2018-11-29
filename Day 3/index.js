const http = require('http');
const fs = require('fs');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if(req.method === 'POST' && req.url === '/contact') {
        let body = '';
    req.on('data', (data) => {
        body += data.toString(); 
    });
    req.on('end', () => {
        console.log(parse(body));
        const parsedBody = JSON.stringify(parse(body));
        res.end('<p>Submitted</p>');
        fs.appendFile('file.txt', parsedBody, (err) => {
            if(err) throw err;
            console.log("information is submitted in file");
        })
    });
    } else if(req.method === "GET" && req.url === '/contact') {
        fs.readFile('./contact.html', (err, data) => {
            if(err) throw err;
            res.writeHeader(200, {"Content-Type" : 'text/html'})
            res.write(data);
            res.end();
        })
    }else if(req.method === "GET" && req.url === '/style.css') {
        fs.readFile('./style.css', (err, data) => {
            if(err) throw err;
            res.writeHeader(200, {"Content-Type" : 'text/css'})
            res.write(data);
            res.end();
        })
    }  
    else {
        res.end(req.url)
    }
    
})

server.listen(4000 , () => {
    console.log("server is running at 4000")
})