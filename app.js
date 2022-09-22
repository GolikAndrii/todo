const express = require('express')
const bodyBarser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const todosRoutes = require('./routes/todos')

const app = express()

app.use(bodyBarser.urlencoded({extended: false}))
app.use(bodyBarser.json())

app.use('/auth', authRoutes)
app.use('/category', categoryRoutes)
app.use('/todos', todosRoutes)

module.exports = app