const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const indexSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    indexes:[{type:String}]
},{timestamps:true})

mongoose.model("Index",indexSchema)