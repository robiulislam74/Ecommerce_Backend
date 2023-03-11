const express = require("express")
const _ = express.Router()
const User = require('../../model/userSchema.js')
var jwt = require('jsonwebtoken');

_.get('/registration',(req,res)=>{
     const {email,phone,firstName,lastName,password}=req.body
   console.log(req.body)
     if(!firstName){
        return res.send("Err: Please enter your firstName!")
     }
     if(!lastName){
        return res.send("Err: Please enter your lastName!")
     }
     if(!email){
        return res.send("Err: Please enter your email!")
     }
     if(!phone){
        return res.send("Err: Please enter your phoneNumber!")
     }
     if(!password){
        return res.send("Err: Please enter your password!")
     }

     const user = new User({
      email,
      phone,
      firstName,
      lastName,
      password,
     })
     user.save();
     var token = jwt.sign({ email:user.email}, "&Y6!q+u,pHuLO9", { expiresIn:"1h" });
     res.send(token)
})

module.exports= _;