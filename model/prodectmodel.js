<<<<<<< HEAD
const mongoose = require("mongoose");

// FIX: mongoose.Schema (capital S) — was new mongoose.schema
const prodectmodel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    image: [{
        type: String
    }]
});

module.exports = mongoose.model("Product", prodectmodel);
=======
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
>>>>>>> 94a62c41be309c34487cb85cd52f07bc8535974e
