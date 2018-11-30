const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');


const port = 4000;

app.use((req, res, next) => {
    const data = `Request - ${req.method} - ${req.url} - ${new Date()}`;
    fs.appendFile('access.log', data, (err, savedData) => {
        next();
    } )
})

app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.set('views', './views');
app.set('view engine', 'pug');

const body = '';

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/views/index.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname + '/views/contact.html')));

app.post('/contact', (req, res) => {
    const body = req.body
    fs.readFile('./file.json', body, (err, data) => {
        const parsedData = JSON.parse(String(data))
        console.log(parsedData.contacts)
        parsedData.contacts.push(body)
        fs.writeFile('./file.json',JSON.stringify(parsedData), (err) => {
            if(err) throw err;
        })
    })    
    res.send('submitted')
});

app.get('/contact/list', (req,res) => {
    fs.readFile('./file.json', (err, data) => {
        res.json(JSON.parse(data + ''));
    })
})

app.get('/contact/list/:name', (req, res) => {
    const name = req.params.name;
    const data = fs.readFile('./file.json', (err, data) => {
    const dataArr = JSON.parse(String(data))
    const filteredData = dataArr.contacts.filter(contact => contact.name == name)
    res.render('about', {name : filteredData[0].name, email : filteredData[0].email})
    })

})

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})