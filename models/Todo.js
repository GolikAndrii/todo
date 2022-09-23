const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: false
    },
    user:{
        ref: 'users',
        type: Schema.Types.ObjectId
    },
    category:{
        ref: 'category',
        type: Schema.Types.ObjectId
    },
    done:{
        type: Boolean,
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('todo', todoSchema)