"use strict";

var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var requireLogin = require('../middleware/requireLogin');

var Order = mongoose.model("Order"); // 

router.get('/allorder', function (req, res) {
  Order.find({
    status: "order_placed"
  }).populate("postedBy", "_id name").sort('-createdAt').then(function (orders) {
    res.json({
      orders: orders
    });
  })["catch"](function (err) {
    console.log(err);
  });
}); // router.get('/mypost',requireLogin,(req,res)=>{
//     Post.find({postedBy:req.user._id})
//     .populate("PostedBy","_id name")
//     .then(mypost=>{
//         res.json({mypost})
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// })

router.get('/myorder', requireLogin, function (req, res) {
  Order.find({
    postedBy: req.user._id
  }).populate("postedBy", "_id name").sort('-createdAt').then(function (orders) {
    res.json({
      orders: orders
    });
  })["catch"](function (err) {
    console.log(err);
  });
}); // router.get('/post/:id',(req,res)=>{
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

router.put('/update/:id', requireLogin, function (req, res) {
  Post.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }).then(function (posts) {
    res.json({
      posts: posts
    });
  })["catch"](function (err) {
    response.status(500).json(error);
  });
});
router.post('/createorder', requireLogin, function (req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      link = _req$body.link;

  if (!title || !link) {
    return res.status(422).json({
      error: "Plase add all the fields"
    });
  }

  req.user.password = undefined;
  var order = new Order({
    title: title,
    link: link,
    postedBy: req.user
  });
  order.save().then(function (result) {
    res.json({
      order: result
    });
  })["catch"](function (err) {
    console.log(err);
  });
}); // 

router.put('/updateorder/:id', function (req, res) {
  Order.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, {
    "new": true
  }).then(function (posts) {
    res.json({
      posts: posts
    });
  })["catch"](function (err) {
    response.status(500).json(error);
  });
}); //  

router["delete"]('/deletepost/:postId', requireLogin, function (req, res) {
  Post.findOne({
    _id: req.params.postId
  }).populate("postedBy", "_id").exec(function (err, post) {
    if (err || !post) {
      return res.status(422).json({
        error: err
      });
    }

    if (post.postedBy._id.toString() === req.user._id.toString()) {
      post.remove().then(function (result) {
        res.json(result);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  });
});
module.exports = router;