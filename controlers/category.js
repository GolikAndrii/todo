const Category = require('../models/Category')

module.exports.getAll = (req, res) => {
    // res.status(200).json({
    //     message: "This is Categories!"
    // })
}



module.exports.getById = (req, res) => {

}

module.exports.remove =  (req, res) => {

}

module.exports.create = (req, res) => {
    try{
        const category = Category({
            name: req.body.name,
            imageSrc:req.body.image,
            user: req.user.id
        })
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