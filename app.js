const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyBarser = require('body-parser')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const todosRoutes = require('./routes/todos')
const keys = require('./config/keys')

const app = express()

mongoose.connect(keys.mongoURI)
    .then(()=>console.log('MongoDB connected'))
    .catch(error => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(require('cors')(''))
app.use(bodyBarser.urlencoded({extended: false}))
app.use(bodyBarser.json())

app.use('/todo/auth', authRoutes)
app.use('/todo/category', categoryRoutes)
app.use('/todo/todos', todosRoutes)

module.exports = app