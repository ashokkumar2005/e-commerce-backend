const express = require("express");

const app = express();

const order = require("./routes/orderroute.js");
const prodect = require("./routes/prodectroute.js");


app.use("/api/ec",order);
app.use("/api/ec",prodect);


app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`)
})