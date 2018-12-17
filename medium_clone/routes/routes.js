const express = require('express');
const router = express.Router();
const articles = require('../controllers/article.controller')
const users = require('../controllers/user.controller')


router.get('/', (req, res) => {
    res.render('index');
  })


router.post('/new', articles.newArticle);

router.post('/signup', users.signup )



module.exports = router;