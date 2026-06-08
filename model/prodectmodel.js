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
