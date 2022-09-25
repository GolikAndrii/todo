const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const controller = require('../controlers/category')
const passport = require('passport')

//http://localhost:5000/category/
router.get('/todo/',passport.authenticate('jwt', {session: false}), controller.getAll )
router.get('/todo/:categoryId', controller.getById)
router.delete('/todo/:id', controller.remove )
router.post('/todo/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create )
router.patch('/todo/:id',  upload.single('image'), controller.update )


module.exports = router