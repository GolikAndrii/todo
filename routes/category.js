const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const controller = require('../controlers/category')
const passport = require('passport')

//http://localhost:5000/todo/category/
router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getById)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update)


module.exports = router