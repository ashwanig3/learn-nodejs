const User = require('../models/user');


module.exports = {
   
    signup : (req, res) => {
        const userData = req.body;
        const newUser = new User(userData);	
        
        User.find({username : userData.username}, (err, data) => {
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
    }
}