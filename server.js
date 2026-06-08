require('dotenv').config()   // FIX: was require(dotenv) — missing quotes
const express = require("express");
const cors = require("cors");   // FIX: added missing cors

const app = express();

app.use(cors());               // FIX: enable CORS for frontend
app.use(express.json());       // FIX: added missing JSON body parser

const order = require("./routes/orderroute.js");
const prodect = require("./routes/prodectroute.js");
const connectDB = require("./config/connectdb.js");

connectDB();

app.use("/api/order", order);
app.use("/api/product", prodect);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});
