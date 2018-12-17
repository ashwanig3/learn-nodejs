const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const SALT_FACTOR = 10;

const userSchema = new Schema({
    name: String,
    username:String,
    email:String,
    password: String
  });

  userSchema.methods.verifyPassword = function(userPassword, cb) {
    bcrypt.compare(userPassword, this.password, function(err, res) {
      if(err) cb(err, false);
      cb(null, res);
    })
  }
  
  userSchema.pre('save', function(next){
  
    var password = this.password;
    var self = this;
  
    console.log('debug1', this, this.password, this.isModified(this.password));
  
    if(this.isModified(this.password)) return next();
  
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
      console.log('debug 1.5', err, salt);
      bcrypt.hash(password, salt, function(err, hash) {
          console.log('debug2', hash, err);
          // Store hash in your password DB.
          self.password = hash;
          next();
      });
    })
  });

const User = mongoose.model('Users',userSchema);

module.exports = User;
