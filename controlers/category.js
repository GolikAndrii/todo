module.exports.getAll = (req, res) => {
    res.status(200).json({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image
    })
}

module.exports.getById = (req, res) => {

}

module.exports.remove =  (req, res) => {

}

module.exports.create = (req, res) => {

}

module.exports.update = (req, res) => {

}