 const mongoose = require("mongoose");

 const prodectmodel = new mongoose.schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    image:[{
        type:String
    }]
 })

 module.exports = mongoose.model("Product",prodectmodel);