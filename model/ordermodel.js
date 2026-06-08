<<<<<<< HEAD
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
=======
 const mongoose = require("mongoose");

 const ordermodel = mongoose.schema({
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
        type: String, // image URL
      },
    ],
   
  } ,
   {
    timestamps: true,
    });

 module.exports = mongoose.model("order",ordermodel)
>>>>>>> 94a62c41be309c34487cb85cd52f07bc8535974e
