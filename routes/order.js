const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Order =  mongoose.model("Order")
// 

router.get('/allorder',(req,res)=>{
   

    Order.find({status:"order_placed"})
    .populate("postedBy","_id name")
    .sort('-createdAt')
    .then((orders)=>{
        res.json({orders})
    }).catch(err=>{
        console.log(err)
    })
    
    
    
})
// router.get('/mypost',requireLogin,(req,res)=>{
//     Post.find({postedBy:req.user._id})
//     .populate("PostedBy","_id name")
//     .then(mypost=>{
//         res.json({mypost})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })


router.get('/myorder',requireLogin,(req,res)=>{
   

    Order.find({postedBy:req.user._id})
    .populate("postedBy","_id name")
    .sort('-createdAt')
    .then((orders)=>{
        res.json({orders})
    }).catch(err=>{
        console.log(err)
    })
    
    
    
})

// router.get('/post/:id',(req,res)=>{
//     Post.findById(req.params.id)
//     .populate("postedBy","_id name")
//     // .populate("comments.postedBy","_id name")
//     // .sort('-createdAt')
//     .then((posts)=>{
//         res.json({posts})
//     }).catch(err=>{
//         console.log(err)
//     })
    
// })


router.put('/update/:id',requireLogin,(req,res)=>{
    Post.findByIdAndUpdate(req.params.id,{ $set: req.body })
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        response.status(500).json(error)
    })
    
})

router.post('/createorder',requireLogin,(req,res)=>{
    const {title,link} = req.body 
    if(!title || !link){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    req.user.password = undefined
    const order = new Order({
        title,
        link,
        postedBy:req.user
    })
    order.save().then(result=>{
        res.json({order:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

// 
router.put('/updateorder/:id',(req,res)=>{
    Order.findByIdAndUpdate(req.params.id,{ $set: req.body },
        {
            new:true
        })
    .then((posts)=>{
        res.json({posts})
    }).catch(err=>{
        response.status(500).json(error)
    })
    
})
//  

router.delete('/deletepost/:postId',requireLogin,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        if(post.postedBy._id.toString() === req.user._id.toString()){
              post.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})

module.exports = router