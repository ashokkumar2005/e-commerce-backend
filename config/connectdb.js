const mongoose = require("mongoose");
const connectDB = async()=>{
 
 try{
    await mongoose.connect(process.env.MONGO_URI)

    console.log("mogoodb is connected")

 } catch(error){
    console.error("DB error",error.message);
    console.log("Continuing without database connection...");
 }

}

module.exports= connectDB;