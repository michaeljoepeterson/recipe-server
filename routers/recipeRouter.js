const express = require('express');
const {Recipe} = require('../models/recipes');
const passport = require('passport');
const router = express.Router();
const jwtAuth = passport.authenticate('jwt', { session: false });
router.use(jwtAuth);
//add verification middleware
router.post('/',(req,res) => {
    console.log(req.body);
    const {title,servingSize,tte,description,ingredients,steps,mainImage, extraImages,youtube,videoNotes,active,shortDescription,featured} = req.body;
    return Recipe.create({
        title,
        servingSize,
        tte,
        description,
        ingredients,
        steps,
        mainImage,
        extraImages,
        youtube,
        videoNotes,
        active,
        shortDescription,
        featured
    })

    .then( recipe => {
        return res.json({
            code:200,
            message:'Recipe created'
        });
    })

    .catch( err => {
        console.log('error ',err);
        if(err.message.includes('E11000')){
            return res.json({
                code:401,
                message:'Recipe already exists'
            });
        }
        return res.json({
            code:500,
            message:'an error occured'
        });
    })
    
});

module.exports = {router};