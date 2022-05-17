 
// const socketio = require('socket.io'); 
// const http = require('http');
const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT = process.env.PORT || 5000

const Database = require('./Database/db')
// const server = http.createServer(app);
const cors = require('cors')
// const io = socketio(server);










Database()

app.use(cors())

require('./models/user')
require('./models/graph')
require('./models/post')
require('./models/order')


app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/graph'))
app.use(require('./routes/post'))
app.use(require('./routes/order'))





const customMidle =(req,res,next)=>{
    console.log("middleware executed!")
    next()
}


app.use(customMidle)

app.get('/',(req,res)=>{
    console.log("middleware !")
    res.send("hello world")
})

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}




app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})