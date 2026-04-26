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