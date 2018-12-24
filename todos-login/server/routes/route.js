const express = require('express')
const router = express.Router()
const user = require('../controller/user.controller');
const todo = require('../controller/todo.controller');
const passport = require('passport')

router.get('/', (req, res) => {
    res.render('index');
  })

  router.get('/create', (req, res) => {
    res.render('index');
  })

  router.get('/login', (req, res) => {
    res.render('index');
  })

  router.get('/signup', (req, res) => {
    res.render('index');
  })

  router.post('/api/signup', user.signUp)
  
  router.post('/api/login', user.logIn)
  
  router.get('/api/isLoggedIn', user.isLoggedIn);

  router.post('/api/create', todo.createTodo)

  router.get('/api/logout', user.logout )

  router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }))

  router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session: true }),
  function(req, res) {
    res.redirect('/');
  })


  module.exports = router;