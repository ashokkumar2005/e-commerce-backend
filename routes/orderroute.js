const express = require("express");

const router = express.Router();  // FIX: was declared twice (duplicate const router)
const { createorder, readoneoreder, readorder } = require("../controller/ordercon.js");

router.post("/", createorder);
router.get("/:id", readoneoreder);
router.get("/", readorder);

module.exports = router;
