const express = require('express')
const _ = express.Router()

_.get('/',(req,res)=>{
    res.send("Ami User Router.")
})

module.exports= _;