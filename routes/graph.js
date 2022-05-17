const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Graph =  mongoose.model("Graph")
// 

router.post("/creategraph/:userId",(req,res)=>{
    const {title,labels,data} = req.body 
    if(!title || !labels || !data){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
   
    const graph = new Graph({
        title,
        labels,
        data,
        postedBy:req.params.userId
    })
    graph.save().then(result=>{
        res.json(result)
    })
    .catch(err=>{
        console.log(err)
    })
})


router.get('/odgraph/:graphId',(req,res)=>{
    Graph.findById(req.params.graphId)
    .populate("postedBy","_id name")
    .then(mygraph=>{
        res.json({mygraph})
    })
    .catch(err=>{
        console.log(err)
    })
})




router.get('/mygraph',requireLogin,(req,res)=>{
    Graph.find({postedBy:req.user._id})
    .populate("PostedBy","_id name")
    .then(mygraph=>{
        res.json({mygraph})
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = router