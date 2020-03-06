const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    ingredient: {type:String,required:true},
    amount: {type:String,required:true},
    units: {type:String,required:true}
},{_id:false});

const recipeSchema = mongoose.Schema({
    title:{type:String,required:true, unique:true},
    servingSize:{type:String,required:true},
    tte:{type:String,required:true},
    description:{type:String,required:true},
    shortDescription:{type:String},
    ingredients:[ingredientSchema],
    steps:{type:Array,required:true},
    mainImage:{type:String},
    extraImages:{type:String},
    youtube:{type:String},
    videoNotes:{type:String,default:""},
    active:{type:Boolean,default:false},
    featured:{type:Boolean,default:false},
    handle:{type:String,unique:true,required:true}
},{minimize:false});

const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = {Recipe};