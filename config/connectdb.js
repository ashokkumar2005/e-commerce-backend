const mongoose = require("mongoose");
const connectDB = async()=>{
 
 try{
    await mongoose.connect(process.env.MONGO_URI)

    console.log("mogoodb is connected")

 } catch(error){
    console.error("DB error",error.message);
<<<<<<< HEAD
    console.log("Continuing without database connection...");
=======

    process.exit(1);
>>>>>>> 94a62c41be309c34487cb85cd52f07bc8535974e
 }

}

module.exports= connectDB;