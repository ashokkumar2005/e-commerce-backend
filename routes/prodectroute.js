 const express = require("express");
const { getprodects, getsingleprodects } = require("../controller/prodectcon");
 
 const router = express.Router();

 router.get("/getproduect",getprodects);
 router.get("/getproduect/:id",getsingleprodects);