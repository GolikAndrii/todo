const Category = require('../models/Category')
const Todo = require('../models/Todo')

module.exports.getAll = async function(req, res) {
    try {
        const categories = await Category.find({user: req.user.id})
        res.status(200).json(categories)
    } catch (e) {
        console.log(e)
    }
}

module.exports.getById = (req, res) => {
    try{
        const category = Category.find({
            category: req.params.categoryId,
            user: req.user.id
        })
        res.status(200).json(category)
    } catch (e){
        console.log(e)
    }
}

module.exports.remove = async  (req, res) => {
    try{
       await Category.remove({_id: req.params.id})
        await Todo.remove({category: req.params.id})
        res.status(200).json({
            message: "Category was deleted"
        })
    } catch (e){

    }
}

module.exports.create = async (req, res) => {

    console.log(req.path)
    const category = new Category({
        name: req.body.name,
        user: req.user.id,
        imageSrc:  req.path ? req.file.path : ''

    })

    try{
        await category.save()
        res.status(201).json(category)

    } catch (e){

    }

}

module.exports.update = async (req, res) => {
    try{
        const category = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        )
        res.status(200).json(category)
    } catch (e){
        console.log(e)
    }
}