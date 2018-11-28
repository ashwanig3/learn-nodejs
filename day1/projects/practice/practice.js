const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;


const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html')
    response.end('<h1>Hello world</h1>')
})

server.listen(port, hostname, () => {
    console.log(`Server is running at ${hostname}: ${port}`)
})