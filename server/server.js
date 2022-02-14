const express = require("express")
require("dotenv").config()
const db = require('./module/db.js')
const app=express()
const router = require('./router/router')
app.use(express.json())  // to can read the body inside the req.
app.use(router)

// to get the data from server side
// app.get('/',(req,res)=>{
//     res.json("welcome")
//     console.log("get ")
// })

// To create post 
// app.post('/po',(req,res)=>{
//     res.json("good post")
//     console.log("new post" , req.body)
// })

const port =3000
app.listen(port,()=>{
    console.log("JS NEW PROJECT")
})