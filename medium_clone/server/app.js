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

const userSchema = new Schema({
    name: String,
    username:String,
    email:String,
    password: String
  });

  const articleSchema = new Schema({
    title: String,
    description: String,
    body: String,
    claps: Number
  })

  const Users = mongoose.model('Users',userSchema);
  const Articles = mongoose.model('Articles', articleSchema)

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

app.post('/new', (req, res) => {
  const blogDetails = req.body;
  var newArticle = new Articles({ title: blogDetails.title,
                                 description: blogDetails.description,
                                  body: blogDetails.body,
                                   claps: blogDetails.claps })
  newArticle.save((err, blogDetails) => {
    if(err) {
      res.json({
        msg: 'Error'
      })
    } else {
      res.json({
        blog: blogDetails
      })
    }
  })
})


app.get('/articles', (req, res) => {
  Articles.find((err, data) => {
    if(err) {
      res.json({
        msg: 'Could not find'
      })
    } else {
      res.json({
        data
      })
    }
  })
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})