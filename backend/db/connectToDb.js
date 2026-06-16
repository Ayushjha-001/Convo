import mongoose from "mongoose";
const connectToMongodb= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to Mongodb")
    }
    catch(error){
    console.log("MongoDB connection error:", error);
}
}
export default connectToMongodb;