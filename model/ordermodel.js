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