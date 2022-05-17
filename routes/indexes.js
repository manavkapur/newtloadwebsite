const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Index=  mongoose.model("Index")
// 




router.post('/createindex',requireLogin,(req,res)=>{
    const {title,indexes} = req.body 
    if(!title || !indexes){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    const post = new Index({
        title,
       indexes
    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })
})



module.exports = router