const User = require('../models/User')

module.exports.login =  (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save().then(()=>{
        console.log('User created')
    })
}

module.exports.register = async (req, res) => {
    // email password

    const newUser = await User.findOne({email: req.body.email})

    if(newUser){
        // User present in DB
        res.status(409).json({
            message: 'This e-mail is busy. Try another one'
        })
    } else {
        // User doesn't present in DB
    }

}