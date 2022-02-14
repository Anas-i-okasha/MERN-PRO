const express = require("express");
const mainRouter = express.Router()
const {getAll} = require('../controller/controller')

mainRouter.get('/',getAll);
    // res.json(getAll())
    // console.log("Anas okasha"


module.exports=mainRouter