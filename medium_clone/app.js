const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const Schema = mongoose.Schema;
const session = require('express-session')
const passport = require('passport');
const path = require('path');
const MongoStore = require('connect-mongo')(session);
const User = require('./models/user');

const port = 4000;

mongoose.connect('mongodb://localhost/mediumClone', { useNewUrlParser: true },  function(err, connection) {
  if(err) console.log(err, "err in mongoose")
  else console.log('Connected to mongodb');
});

  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended : true}));
  app.use('/static', express.static(path.join(__dirname, '/')))

  app.set('views', path.join(__dirname, './server/views'));
  app.set('view engine', 'pug');

  app.use(session({
    secret: 'medium-clone',
    cookie: {
      maxAge: 36000000
    },
    store: new MongoStore({ url: 'mongodb://localhost/medium-session' }),
    resave: true,
    saveUninitialized: true,
    
  }))

  app.use(passport.initialize());
  app.use(passport.session());

// middlware for webpack
if(process.env.NODE_ENV === 'development') {
  console.log('in webpack hot middleware')
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}



require('./server/modules/passport')(passport)
app.use(cors());


app.post('/api/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    console.log(user)
    if (err) { return next(err); }
    if (!user) { 
      return res.status(404).json({
        msg: 'Please SignUp. Account not avilable.'
      }) 
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.status(200).json({
        user 
      })
    });
  })(req, res, next);
});

app.use(require('./routes/routes'));
app.use(require('./routes/api'));


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})