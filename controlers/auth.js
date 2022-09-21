module.exports.login = function (req, res) {
    res.status(200).json({
        login: 'Hello from controller LOGIN'
    })
}

module.exports.register = function (req, res) {
    res.status(200).json({
        register: 'from controller REGISTER'
    })
}