const express = require('express')
const router = express.Router()
//change to showUserController, previously 'todosController' and require('../controllers/todos')
// const todosController = require('../controllers/todos') 
const showuserController = require('../controllers/showuser') 
const { ensureAuth } = require('../middleware/auth')

// router.get('/', ensureAuth, todosController.getTodos)
// router.get('/showoneuser', ensureAuth, showuserController.getShowUser)

// router.post('/createTodo', todosController.createTodo)
// router.post('/createTodo', showuserController.createTodo)

// router.put('/markComplete', todosController.markComplete)
// router.put('/markComplete', showuserController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)
// router.put('/markIncomplete', showuserController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)
// router.delete('/deleteTodo', showuserController.deleteTodo)

module.exports = router