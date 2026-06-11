import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./Routes/auth.routes.js"
import messageRoutes from "./Routes/message.routes.js"
import userRoutes from "./Routes/user.routes.js"

import connectToMongodb from "./db/connectToDb.js";

dotenv.config()

const PORT= process.env.PORT||5000
const app= express()


app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,()=>{ 
    connectToMongodb();
    console.log(`Server is running on ${PORT}`)})
// app.get("/",(req,res)=>{
//     //home route
//     res.send("Hello World!!");
// })