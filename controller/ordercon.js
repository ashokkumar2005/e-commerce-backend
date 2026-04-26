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
