const express = require('express')
const router = express.Router()
const controller = require('../controlers/category')

//http://localhost:5000/category/all
router.post('/all', controller.getAll )
router.post('/:id', controller.getById)
router.delete('/:id', controller.remove )
router.post('/', controller.create )
router.post('/', controller.update )


module.exports = router