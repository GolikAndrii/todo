const Todo = require('../models/Todo')
const Category = require("../models/Category");

module.exports.getByTodoId = async (req, res) => {
    try{
        const todo =await Todo.find({
            todo: req.params.todoId,
            user: req.user.id
        })
        res.status(200).json(todo)
    } catch (e){
        console.log(e)
    }
}

module.exports.getAll = async function(req, res) {
    try {
        const todos = await Todo.find({user: req.user.id})
        res.status(200).json(todos)
    } catch (e) {
        console.log(e)
    }
}

module.exports.getById = (req, res) => {

}

module.exports.remove = async (req, res) => {
    try{
        await Todo.remove({_id: req.params.id})
        res.status(200).json({
            message: "TODO was deleted"
        })
    } catch (e){
        console.log(e)
    }
}

module.exports.create = async (req, res) => {
    try{
        const todo =await Todo({
            name: req.body.name,
            content: req.body.content,
            image: req.body.image,
            user: req.user.id,
            category: req.body.category,
            done: req.body.done,
            date: req.body.date
        }).save()
        res.status(200).json(todo)
    } catch (e){
        console.log(e)
    }
}

module.exports.update = async (req, res) => {
    try{
        const todo = await Todo.findOneAndUpdate(
            {_id:req.params.id},
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(todo)
    } catch (e){
        console.log(e)
    }
}