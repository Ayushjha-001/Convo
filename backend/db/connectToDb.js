import mongoose from "mongoose";
const connectToMongodb= async()=>{
    try{
        await mongoose.connect(process.env.Mongo_DB_URI);
        console.log("connected to Mongodb")
    }
    catch{
        console.log("error")
    }
}
export default connectToMongodb;