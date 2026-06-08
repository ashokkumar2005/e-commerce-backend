const mongoose = require("mongoose");

const seedProducts = async (Product) => {
  try {
    const count = await Product.countDocuments();
    
    // Only seed if database is empty
    if (count === 0) {
      const sampleProducts = [
        {
          name: "Laptop",
          description: "High-performance laptop with 16GB RAM",
          price: 899.99,
          brand: "TechBrand",
          image: ["https://via.placeholder.com/300?text=Laptop"]
        },
        {
          name: "Smartphone",
          description: "Latest 5G smartphone with amazing camera",
          price: 799.99,
          brand: "PhoneCo",
          image: ["https://via.placeholder.com/300?text=Smartphone"]
        },
        {
          name: "Headphones",
          description: "Wireless noise-cancelling headphones",
          price: 199.99,
          brand: "AudioMax",
          image: ["https://via.placeholder.com/300?text=Headphones"]
        },
        {
          name: "Smartwatch",
          description: "Feature-rich smartwatch with health tracking",
          price: 249.99,
          brand: "WatchTech",
          image: ["https://via.placeholder.com/300?text=Smartwatch"]
        }
      ];

      await Product.insertMany(sampleProducts);
      console.log("Sample products seeded successfully");
    }
  } catch (error) {
    console.error("Error seeding products:", error.message);
  }
};

module.exports = seedProducts;
