"use strict";

var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var User = mongoose.model("User");

var crypto = require('crypto');

var bcrypt = require('bcrypt');

var jwt = require('jsonwebtoken');

var _require = require('../config/Key'),
    JWT_SECRET = _require.JWT_SECRET;

var requireLogin = require('../middleware/requireLogin');

router.post('/signup', function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password,
      college = _req$body.college,
      branch = _req$body.branch,
      pic = _req$body.pic;

  if (!email || !password || !name) {
    return res.status(422).json({
      error: "please add all the fields"
    });
  }

  User.findOne({
    email: email
  }).then(function (savedUser) {
    if (savedUser) {
      return res.status(422).json({
        error: "user already exists with that email"
      });
    }

    bcrypt.hash(password, 12).then(function (hashedpassword) {
      var user = new User({
        email: email,
        password: hashedpassword,
        name: name,
        pic: pic,
        college: college,
        branch: branch
      });
      user.save().then(function (user) {
        res.json(user);
      })["catch"](function (err) {
        console.log(err);
      });
    });
  })["catch"](function (err) {
    console.log(err);
  });
});
router.post('/signin', function (req, res) {
  var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;

  if (!email || !password) {
    return res.status(422).json({
      error: "ALL Fields are required"
    });
  }

  User.findOne({
    email: email
  }).then(function (savedUser) {
    if (!savedUser) {
      return res.status(422).json({
        error: "Invalid User Details"
      });
    }

    bcrypt.compare(password, savedUser.password).then(function (doMatch) {
      if (doMatch) {
        // res.json({message:"successfully signed in"})
        var token = jwt.sign({
          _id: savedUser._id
        }, JWT_SECRET);
        var _id = savedUser._id,
            role = savedUser.role,
            name = savedUser.name,
            _email = savedUser.email,
            followers = savedUser.followers,
            following = savedUser.following,
            college = savedUser.college,
            branch = savedUser.branch,
            pic = savedUser.pic;
        res.json({
          token: token,
          user: {
            _id: _id,
            name: name,
            role: role,
            email: _email,
            followers: followers,
            following: following,
            pic: pic,
            college: college,
            branch: branch
          }
        });
      } else {
        return res.status(422).json({
          error: "Invalid Email or password"
        });
      }
    })["catch"](function (err) {
      console.log(err);
    });
  });
});
router.get('/check', requireLogin, function (req, res) {
  return res.status(200).json({
    reality: "checked"
  });
});
module.exports = router;