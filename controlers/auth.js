const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const mongoose = require("mongoose");

module.exports.login = async (req, res) => {
    const newUser = await User.findOne({email: req.body.email})

    if (newUser) {
        // Check the PASSWORD or User is present in DB
        const passwordResult = bcrypt.compareSync(req.body.password, newUser.password)
        if (passwordResult){
          // If password is correct
            const token = jwt.sign({
                email: newUser.email,
                userId: newUser._id
            }, keys.jwt,{expiresIn: 3600})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            // If password is NOT correct
            res.status(401).json({
                message: "Password is not correct. Try again!"
            })
        }
    } else {
        // There is no User in DB
        res.status(404).json({
            message: "User with this e-mail is not found!"
        })
    }

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
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password

        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try{
            await user.save()
            res.status(201).json(user)
        } catch (e){

        }
    }

}