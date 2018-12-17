const express = require('express');
const app = express();
const articles = require('../controllers/article.controller')
const user = require('./../controllers/user.controller')

app.get('/api/articles', articles.articlesfound);

app.get('/api/isLoggedIn', user.isLoggedIn);


module.exports = app;