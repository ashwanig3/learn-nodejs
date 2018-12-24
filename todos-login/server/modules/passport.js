const Local = require('passport-local').Strategy;
const User = require('./../model/user')
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


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
        user.verifyPassword(password, function(err, isMatched) {
          if (!isMatched) {
            return done(null, false)
          }
          return done(null, user);
        }) 
      });
    }
  ));

  passport.use(new GoogleStrategy({
    clientID: '161666936412-8c1t1ckse2hkhi0aj47lfff5hd8dk93p.apps.googleusercontent.com',
    clientSecret: 'y35mr-Zz0J4WVgWqiColgiYf',
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  function(res, token, tokenSecret, profile, done) {
    console.log(profile)
    const newUser = new User({
      name : profile.displayName,
      email : profile.emails[0].value,
      googleId : profile.id,
      username: null,
      password: null,
    });
      

      User.findOne({ googleId: profile.id }, function (err, user) {
        if(err) return done(err);
        if(user) return done(null, user)
        if(!user){
          newUser.save(function(err) {
            if (err) throw err;
            return done(null, newUser);
          });
      }
      });
  }
));
}
