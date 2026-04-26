require(dotenv).config()
const express = require("express");


const app = express();

const order = require("./routes/orderroute.js");
const prodect = require("./routes/prodectroute.js");
const connectDB = require("./config/connectdb.js");

connectDB();



app.use("/api/order",order);
app.use("/api/product",prodect);

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})