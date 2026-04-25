const express = require("express");
const { placeorder } = require("../controller/ordercon");



const router = express.Router();

router.post("/placeorder",placeorder)