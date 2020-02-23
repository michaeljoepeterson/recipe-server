const express = require('express');
const {Recipe} = require('../models/recipes');
const router = express.Router();

router.get('/',(req,res) =>{
    let {skip,limit} = req.query;
    limit = limit ? parseInt(limit) : 20;
    skip = skip ? parseInt(skip) : 0;
    return Recipe.find({active:true}).limit(limit).skip(skip)

    .then(recipes => {
        return res.json({
            code:200,
            recipes
        });
    })

    .catch(err => {
        console.log('error ',err);

        return res.json({
            code:500,
            message:'an error occured'
        });
    });
});

module.exports = {router};