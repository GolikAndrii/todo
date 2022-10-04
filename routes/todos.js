const express = require('express')
const router = express.Router()
const controller = require('../controlers/todo')
const upload = require('../middleware/upload')
const passport = require('passport')



router.get('/', passport.authenticate('jwt', {session: false}), controller.getAll)
router.get('/:id', controller.getById )
router.delete('/:id', controller.remove )
router.post('/', controller.create )
router.patch('/:id', controller.update )

module.exports = router