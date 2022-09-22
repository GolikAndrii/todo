const express = require('express')
const mongoose = require('mongoose')
const bodyBarser = require('body-parser')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const todosRoutes = require('./routes/todos')
const keys = require('./config/keys')

const app = express()

mongoose.connect(keys.mongoURI)
    .then(()=>console.log('MongoDB connected'))
    .catch(error => console.log(error))

app.use(require('morgan')('dev'))
app.use(require('cors')(''))
app.use(bodyBarser.urlencoded({extended: false}))
app.use(bodyBarser.json())

app.use('/auth', authRoutes)
app.use('/category', categoryRoutes)
app.use('/todos', todosRoutes)

module.exports = app