"use strict";

// const socketio = require('socket.io'); 
// const http = require('http');
var express = require('express');

var app = express();

var mongoose = require('mongoose');

var PORT = process.env.PORT || 5000;

var Database = require('./Database/db'); // const server = http.createServer(app);


var cors = require('cors'); // const io = socketio(server);


Database();
app.use(cors());

require('./models/user');

require('./models/graph');

require('./models/post');

require('./models/order');

app.use(express.json());
app.use(require('./routes/auth'));
app.use(require('./routes/graph'));
app.use(require('./routes/post'));
app.use(require('./routes/order'));

var customMidle = function customMidle(req, res, next) {
  console.log("middleware executed!");
  next();
};

app.use(customMidle);
app.get('/', function (req, res) {
  console.log("middleware !");
  res.send("hello world");
});
app.listen(PORT, function () {
  console.log("server is running on", PORT);
});