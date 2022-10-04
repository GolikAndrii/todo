const express = require('express')
const router = express.Router()
const controller = require('../controlers/auth')


// localhost:5000/auth/login
router.post('/login', controller.login )
// localhost:5000/auth/register
router.post('/register', controller.register )
// localhost:5000/auth/repassword
router.post('/repassword', controller.repassword )

module.exports = router