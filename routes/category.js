const express = require('express')
const router = express.Router()
const controller = require('../controlers/category')
const passport = require('passport')

//http://localhost:5000/category/
router.get('/',passport.authenticate('jwt', {session: false}), controller.getAll )
router.get('/:categoryId', controller.getById)
router.delete('/:id', controller.remove )
router.post('/', controller.create )
router.post('/', controller.update )


module.exports = router