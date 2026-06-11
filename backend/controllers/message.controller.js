import Conversation from "../models/conversation.js"
import Message from "../models/message.js"

export const sendMessage=async(req,res)=>{
    try {
        const {id:receiverId}=req.params
        const {message}= req.body
        const senderId= req.user._id
        let conversation= await Conversation.findOne({
            participants:{ $all: [senderId,receiverId]}
        })
        if(!conversation){
            conversation= await Conversation.create({
                participants:[senderId,receiverId]
            })
        }
        const newMessage= new Message({
            senderId,
            receiverId,
            message,
        })
        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        await Promise.all([newMessage.save(),conversation.save()])
        res.status(200).json(newMessage)
        
    } catch (error) {
        console.log("Error in message controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }

}
export const getMessage=async(req,res)=>{
    try {
        const senderId=req.user._id;
        const {id:userToChatId}=req.params;
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages") 
        if(!conversation){
            res.status(200).json([])
        }
        res.status(200).json(conversation.messages)
    

    } catch (error) {
        console.log("Error in getMessage controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}