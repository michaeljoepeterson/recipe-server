const express = require('express');
const {User} = require('../models/user');
const router = express.Router();

router.post('/admin',(req,res) => {
    const {email,password} = req.body;

    return User.hashPassword(password)

    .then(hash => {
        return User.create({
            email,
            password:hash
        })
    })

    .then(user => {
        return res.json({
            code:200,
            message:'User created'
        });
    })

    .catch(err => {
        console.log('error ',err)
        return res.json({
            code:500,
            message:'an error occured'
        });
    })
    
});

module.exports = {router}