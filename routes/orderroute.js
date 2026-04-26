const express = require("express");

const router = express.Router();
const {createorder,readoneoreder,readorder} = require("../controller/ordercon.js")


const router = express.Router();

router.post("/",createorder);
router.get("/:id",readoneoreder);
router.get("/",readorder);

module.exports = router;