const express = require("express")
const _ = express.Router()

_.get('/',function(req,res){
    res.send("ami user router")
})

module.exports= _;