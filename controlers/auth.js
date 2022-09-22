module.exports.login =  (req, res) => {
    res.status(200).json({
        // login: {
        //     email: req.body.email,
        //     password: req.body.password
        // }
        register: 'from controller LOGIN'
    })
}

module.exports.register =  (req, res) => {
    res.status(200).json({
        register: 'from controller REGISTER'
    })
}