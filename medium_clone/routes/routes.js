const express = require('express');
const router = express.Router();
const articles = require('../controllers/article.controller')
const users = require('../controllers/user.controller')


router.get('/', (req, res) => {
    res.render('index');
  })


router.post('/api/new', articles.newArticle);

router.post('/api/signup', users.signup )

router.get('/api/logout', users.logout )



module.exports = router;
