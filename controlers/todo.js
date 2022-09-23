const Todo = require('../models/Todo')

module.exports.getByCategoryId = async (req, res) => {
    try{
        const todo =await Todo.find({
            category: req.params.categoryId,
            user: req.user.id
        })
        res.status(200).json(todo)
    } catch (e){
        console.log(e)
    }
}

module.exports.getAll = (req, res) => {
    // res.status(200).json({
    //     todo: 'from controller TODO ALL'
    // })

}

module.exports.getById = (req, res) => {

}

module.exports.remove = (req, res) => {

}

module.exports.create = async (req, res) => {
    try{
        const todo =await Todo({
            name: req.body.name,
            content: req.body.content,
            image: req.body.image,

        })
        res.status(200).json(todo)
    } catch (e){
        console.log(e)
    }

}

module.exports.update = (req, res) => {

}