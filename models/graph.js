const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const graphSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    labels:[{type:String}],
    data:[{type:Number}],
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

mongoose.model("Graph",graphSchema)