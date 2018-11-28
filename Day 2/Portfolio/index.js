const http = require('http');
const fs = require('fs');

const imgArr = [
                '1.jpg','2.jpg','3.JPG','3.png','css.svg','html.png',
                'js.png','project1.png','project10.png','project11.png',
                'project12.png','project2.png','project3.png','project4.png',
                'project5.png','project6.png','project7.png','project8.png',
                'project9.png','sass.png'
            ]


const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/') {
        fs.readFile('./index.html', (err, html) => {
            if(err) {
                throw err;
            }
            res.writeHeader(200, {"Content-Type": "text/html"});
            res.write(html);
            res.end();
        })
    } else if(req.method === 'GET' && req.url === '/about') {
            console.log('praveen-me');
            fs.readFile('./about.html', (err, html) => {
                if(err) throw err;
                res.writeHeader(200,{"Content-Type": "text/html"});
                res.write(html);
                res.end();
            }
            ) 
    } else if(req.url == '/assets/main.css') {
            fs.readFile('./assets/main.css', (err, css) => {
                if(err) throw err;
                res.writeHeader(200, {"Content-type": 'text/CSS'});
                res.write(css);
                res.end();
            }
            )
    } else {
            for(let i = 0; i < imgArr.length; i++) {
                if(req.url == `/assets/media/${imgArr[i]}`) {
                    fs.readFile(`./assets/media/${imgArr[i]}`, (err, img) => {
                        if(err) throw err;
                        res.writeHeader(200, {"Content-type": 'image/jpeg'});
                        res.write(img);
                        res.end();
                    })
                }
        } 
    } 
})
        
server.listen(4400, function() {
    console.log("Server is running at localhost:4400")
})