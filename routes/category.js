const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')
const controller = require('../controlers/category')
const passport = require('passport')

//http://localhost:5000/category/
router.get('/',passport.authenticate('jwt', {session: false}), controller.getAll )
router.get('/:categoryId', controller.getById)
router.delete('/:id', controller.remove )
router.post('/', upload.single('image'), controller.create )
router.patch('/:id', upload.single('image'), controller.update )


module.exports = router