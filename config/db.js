const mongoose=require("mongoose")
const colors=require("colors")

const connectDB=async()=>{
    try{
         await mongoose.connect(process.env.MONGO_URL)
         console.log("Connected to databse");

    }
    catch(error){
        console.log(`MongoDb database error ${error}` .bgBlue.white);

    }

}

module.exports=connectDB