const express = require('express')
const router = express.Router()
const controller = require('../controlers/auth')


// localhost:5000/auth/login
router.post('/todo/login', controller.login )
// localhost:5000/auth/register
router.post('/todo/register', controller.register )

module.exports = router