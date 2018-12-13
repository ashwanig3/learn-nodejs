const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const Schema = mongoose.Schema;


const port = 4000;

mongoose.connect('mongodb://localhost/mediumClone', { useNewUrlParser: true },  function(err, connection) {
  if(err) throw err
  else console.log('Connected to mongodb');
});

var userSchema = new Schema({
    name: String,
    username:String,
    email:String,
    password: String
  });

  const Users = mongoose.model('Users',userSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());


app.get('/', (req, res) => {
  res.send('server is running n localhost:4000')

})

app.post('/signup', (req, res) => {
    const userData = req.body;
    const newUser = new Users(userData);	
    
    Users.find({username : userData.username}, (err, data) => {
      if(data.length) {
        res.writeHead(200, {"Content-TypUpdates.controller.addPoste": "application/json"});
        res.end(JSON.stringify({
          msg : "username is available"
        }));
      } else {
        newUser.save((err, data) => {
          if(err) {
            res.json({
              msg : "Input Valid Credentials"
            })
          } else {
            res.json({
              responseStatus : "200",
              msg : "Signup Successfully"
            })
          }
        })
      }
    });
})

app.post('/login', (req, res) => {
  const userCred = req.body;
  Users.findOne({username: userCred.username}, (err, data) => {
    if(err) {
      res.json({
        msg: 'Invalid Username or Password'
      })
   } else {
     res.json({
      userData: data
     })
    }
  })
})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})