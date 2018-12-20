const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('passport');
const session = require('express-session')
const MongoStore = require('connect-mongo')(session);

const port = 8000;

mongoose.connect('mongodb://localhost/todos-login', { useNewUrlParser: true },  function(err, connection) {
  if(err) console.log(err, "err in mongoose")
  else console.log('Connected to mongodb');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/static', express.static(path.join(__dirname, '/')))

app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'todos',
  cookie: {
    maxAge: 36000000
  },
  store: new MongoStore({ url: 'mongodb://localhost/todos-session' }),
  resave: true,
  saveUninitialized: true,
  
}))

app.use(passport.initialize());
app.use(passport.session());



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

app.use(require('./server/routes/route'));
app.use(require('./server/routes/api'))


app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`)
})