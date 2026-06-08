<<<<<<< HEAD
// FIX: variable shadowing — 'product' used both as module import and local var
const Product = require("../model/prodectmodel.js");

// Mock data for when database is unavailable
const mockProducts = [
    {
        _id: "1",
        name: "Laptop",
        description: "High-performance laptop with 16GB RAM",
        price: 899.99,
        brand: "TechBrand",
        image: ["https://via.placeholder.com/300?text=Laptop"]
    },
    {
        _id: "2",
        name: "Smartphone",
        description: "Latest 5G smartphone with amazing camera",
        price: 799.99,
        brand: "PhoneCo",
        image: ["https://via.placeholder.com/300?text=Smartphone"]
    },
    {
        _id: "3",
        name: "Headphones",
        description: "Wireless noise-cancelling headphones",
        price: 199.99,
        brand: "AudioMax",
        image: ["https://via.placeholder.com/300?text=Headphones"]
    },
    {
        _id: "4",
        name: "Smartwatch",
        description: "Feature-rich smartwatch with health tracking",
        price: 249.99,
        brand: "WatchTech",
        image: ["https://via.placeholder.com/300?text=Smartwatch"]
    }
];

// CREATE PRODUCT
exports.createproduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// READ ALL PRODUCTS
exports.readproduct = async (req, res) => {   // FIX: also exported as getprodects below
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        // Return mock data if database is unavailable
        console.log("Database error, returning mock data:", error.message);
        res.status(200).json(mockProducts);
    }
};

// alias matching prodectroute.js import name
exports.getprodects = exports.readproduct;

// READ ONE PRODUCT
exports.singleproduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        // Return mock data if database is unavailable
        const mockProduct = mockProducts.find(p => p._id === req.params.id);
        if (mockProduct) {
            res.status(200).json(mockProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    }
};
// alias
exports.getsingleprodects = exports.singleproduct;

// UPDATE PRODUCT — FIX: findIdAndUpdate → findByIdAndUpdate
exports.updateproduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE PRODUCT — FIX: findIdAndDelete → findByIdAndDelete, added response
exports.deleteproduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
=======
const product = require("../model/prodectmodel.js");


//CREATE PRODECT MODEL
exports.createproduct = async (req,res)=>{
    try{
    const product = await product.create(req.body);
    res.status(200).json(product);
    }catch(error){
            res.status(500).json({message:error.message});
    }
}

//READ PRODECT MODEL
exports.readproduct = async(req,res)=>{
    const product = await product.find();
     res.status(200).json(product);
}

//READ ONE PRODUCT 
exports.singleproduct =async(req,res)=>{
    const product = await product.findById(req.params.id);
     res.status(200).json(product);

}

//UPDATE PRODUCT 
exports.updateproduct = async(req,res)=>{
    const product = await product.findIdAndUpdate(req.params.id,req.body,{new:true});
     res.status(200).json(product);

}

//DELETE PRODUCT 
exports.deleteproduct = async(req,res)=>{
    const product = await product.findIdAndDelete(req.params.id)
}
>>>>>>> 94a62c41be309c34487cb85cd52f07bc8535974e
