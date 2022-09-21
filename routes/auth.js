const express = require('express')
const router = express.Router()
const controller = require('../controlers/auth')


// localhost:5000/auth/login
router.post('/login', controller.login )
router.post('/register', controller.register )

module.exports = router