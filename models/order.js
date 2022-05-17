const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const orderSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    status: { type: String, default: 'order_placed'},
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

mongoose.model("Order",orderSchema)