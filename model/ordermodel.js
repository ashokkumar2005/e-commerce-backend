const mongoose = require("mongoose");

// FIX: mongoose.Schema (capital S) — was mongoose.schema
const ordermodel = mongoose.Schema({
    description: {
        type: String,
        required: [true, "Product description is required"],
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
    },
    images: [
        {
            type: String,
        },
    ],
},
{
    timestamps: true,
});

module.exports = mongoose.model("order", ordermodel);
