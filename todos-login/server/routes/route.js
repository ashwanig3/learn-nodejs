const express = require('express')
const router = express.Router()
const user = require('../controller/user.controller')
const todo = require('../controller/todo.controller')
router.get('/', (req, res) => {
    res.render('index');
  })

  router.post('/api/signup', user.signUp)
  
  router.post('/api/login', user.logIn)
  
  router.get('/api/isLoggedIn', user.isLoggedIn);

  router.post('/api/create', todo.createTodo)

  router.get('/api/logout', user.logout )

  module.exports = router;