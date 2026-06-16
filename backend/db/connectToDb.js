import mongoose from "mongoose";
const connectToMongodb= async()=>{
    try{
        console.log("Mongo_DB_URI exists:", !!process.env.Mongo_DB_URI);
    console.log("Available env keys:", Object.keys(process.env).filter(k =>
      k.toLowerCase().includes("mongo")
    ));
        await mongoose.connect(process.env.Mongo_DB_URI);
        console.log("connected to Mongodb")
    }
    catch(error){
    console.log("MongoDB connection error:", error);
}
}
export default connectToMongodb;