<<<<<<< HEAD
const Order = require("../model/ordermodel.js");

// CREATE ORDER
exports.createorder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL ORDERS
exports.readorder = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ONE ORDER — FIX: was returning 'order' (undefined) instead of 'orders'
exports.readoneoreder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);  // FIX: was res.json(order) with 'orders' variable
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
=======
 const Order = require("../model/ordermodel.js");

 //CREATE ORDER
 exports.createorder = async(req,res)=>{
    try{
        const order = await Order.create(req.body);
        res.status(200).json(order);
    }catch(error){
        res.status(500).json({message:error.message});
    }
 }

 //GET ORDER 
 exports.readorder = async(req,res)=>{
    const orders = await Order.find();
    res.status(200).json(orders);

 }

 //GET ONE ORDER 
 exports.readoneoreder = async(req,res)=>{
    const orders = await Order.findById(req.params.id)
    res.status(200).json(order);
 };
>>>>>>> 94a62c41be309c34487cb85cd52f07bc8535974e
