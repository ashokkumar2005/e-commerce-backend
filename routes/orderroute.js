const express = require("express");

<<<<<<< HEAD
const router = express.Router();  // FIX: was declared twice (duplicate const router)
const { createorder, readoneoreder, readorder } = require("../controller/ordercon.js");

router.post("/", createorder);
router.get("/:id", readoneoreder);
router.get("/", readorder);

module.exports = router;
=======
const router = express.Router();
const {createorder,readoneoreder,readorder} = require("../controller/ordercon.js")


const router = express.Router();

router.post("/",createorder);
router.get("/:id",readoneoreder);
router.get("/",readorder);

module.exports = router;
>>>>>>> 94a62c41be309c34487cb85cd52f07bc8535974e
