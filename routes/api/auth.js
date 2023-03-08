const express = require("express")
const _ = express.Router()

_.get('/registration',(req,res)=>{
    res.json("Hellow Ami api Routes Theykey aschi.")
})

module.exports= _;