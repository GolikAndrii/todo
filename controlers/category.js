module.exports.getAll = (req, res) => {
    res.status(200).json({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image
    })
}

module.exports.getById = function (req, res) {

}

module.exports.remove = function (req, res) {

}

module.exports.create = function (req, res) {

}

module.exports.update = function (req, res) {

}