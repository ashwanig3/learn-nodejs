const User = require('../models/user');


module.exports = {
   
    signup : (req, res) => {
        const userData = req.body;
        const newUser = new User(userData);	
        
        User.find({username : userData.username}, (err, data) => {
          if(data.length) {
            res.writeHead(200, {"Content-TypUpdates.controller.addPoste": "application/json"});
            res.end(JSON.stringify({
              msg : "username is not available"
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
    },
    isLoggedIn : (req, res) => {
      if(req.user) {
        User.findOne({_id : req.user._id}, (err, data) => {
          if(data) {
            res.json({
              user : data
            })
          } else {
            res.status(404).json({
              msg : "Please Sign Up. You are not logged in."
            })
          }
        })
      }
    },
    logout:(req, res) => {
      req.session.destroy();
      res.status(200).json({
        msg : "Session is removed"
      })
    }
  }