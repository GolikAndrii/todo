const Category = require('../models/Category')

module.exports.getAll = (req, res) => {
    // res.status(200).json({
    //     message: "This is Categories!"
    // })
}



module.exports.getById = (req, res) => {

}

module.exports.remove =  (req, res) => {
    try{
        Category.remove({_id: req.params.id})
        res.status(200).json({
            message: "Category was deleted"
        })
    } catch (e){

    }
}

module.exports.create = async (req, res) => {
    try{
        const category = await Category({
            name: req.body.name,
            imageSrc:req.body.image,
            user: req.user.id
        }).save()
        res.status(200).json(category)
    } catch (e){
        console.log(e)
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