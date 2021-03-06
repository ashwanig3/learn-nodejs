const Local = require('passport-local').Strategy;
const User = require('./../../models/user')

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
      
  passport.deserializeUser(function(_id, done) {
    User.findById(_id, function (err, user) {
      done(err, user);
    });
  });
  
  passport.use(new Local(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if(user.password === password) {
          return done(null, user)
        }
        return done(null, false)
        // user.verifyPassword(password, function(err, isMatched) {
        //   if (!isMatched) {
        //     return done(null, false)
        //   }
        //   return done(null, user);
        // }) 
      });
    }
  ));
}
