"use strict";

var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var requireLogin = require('../middleware/requireLogin');

var Graph = mongoose.model("Graph"); // 

router.post("/creategraph/:userId", function (req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      labels = _req$body.labels,
      data = _req$body.data;

  if (!title || !labels || !data) {
    return res.status(422).json({
      error: "Plase add all the fields"
    });
  }

  var graph = new Graph({
    title: title,
    labels: labels,
    data: data,
    postedBy: req.params.userId
  });
  graph.save().then(function (result) {
    res.json(result);
  })["catch"](function (err) {
    console.log(err);
  });
});
router.get('/odgraph/:graphId', function (req, res) {
  Graph.findById(req.params.graphId).populate("postedBy", "_id name").then(function (mygraph) {
    res.json({
      mygraph: mygraph
    });
  })["catch"](function (err) {
    console.log(err);
  });
});
router.get('/mygraph', requireLogin, function (req, res) {
  Graph.find({
    postedBy: req.user._id
  }).populate("PostedBy", "_id name").then(function (mygraph) {
    res.json({
      mygraph: mygraph
    });
  })["catch"](function (err) {
    console.log(err);
  });
});
module.exports = router;