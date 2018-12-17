const express = require('express');
const app = express();
const articles = require('../controllers/article.controller')

app.get('/api/articles', articles.articlesfound);



module.exports = app;