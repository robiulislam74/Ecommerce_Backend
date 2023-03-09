const express = require("express")
const _ = express.Router()

_.get('/registration',(req,res)=>{
     const {fullName,email,phone}=req.body

     if(!fullName){
        return res.send("Err: Please enter your FullName!")
     }
     if(!email){
        return res.send("Err: Please enter your email!")
     }
     if(!phone){
        return res.send("Err: Please enter your phoneNumber!")
     }

     res.send(req.body)
})

module.exports= _;