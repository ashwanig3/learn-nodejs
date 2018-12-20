const express = require('express')
const router = express.Router()
const todo = require('../controller/todo.controller')

router.get('/api/user/:id/todos', todo.getTodoById)

router.delete('/api/delete', todo.deleteTodo)

module.exports = router;