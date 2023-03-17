const express = require("express")
const _ = express.Router()
const User = require('../../model/userSchema.js')
var jwt = require('jsonwebtoken');
const { sendEmailVerification } = require("../../utils/emailSender.js");

_.post('/registration',(req,res)=>{
     const {email,phone,firstName,lastName,password}=req.body;

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

     const fullName = user.firstName + user.lastName;
     const token = jwt.sign({ email:user.email}, "&Y6!q+u,pHuLO9", { expiresIn:"1h" });
     sendEmailVerification(user.email,fullName,token)
     res.send(user.email)
})

module.exports= _;