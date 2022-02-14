const express = require("express")
require("dotenv").config()  // Read Info from env file 
const db = require('./module/db.js')
const app=express()
const router = require('./router/router')
app.use(express.json())  // to can read the body inside the req.
app.use(router)



const port =5000
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})