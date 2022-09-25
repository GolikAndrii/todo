const express = require('express')
const router = express.Router()
const controller = require('../controlers/todo')



router.post('/todo/all', controller.getAll )
router.post('/todo/:id', controller.getById )
router.get('/todo/:todoId', controller.getByTodoId )
router.delete('/todo/:id', controller.remove )
router.post('/todo/', controller.create )
router.post('/todo/', controller.update )

module.exports = router