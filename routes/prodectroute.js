 const express = require("express");
 const { getprodects, 
        getsingleprodects,
        updateproduct,
        deleteproduct ,
        createproduct} = require("../controller/productcon");
 
 const router = express.Router();

 router.post("/",createproduct);
 router.get("/",getprodects);
 router.get("/:id",getsingleprodects);
 router.put("/:id",updateproduct);
 router.delete("/:id",deleteproduct);

 module.exports = router;