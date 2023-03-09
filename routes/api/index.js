const express = require("express")
const _ = express.Router()
const registration = require('./auth')

_.use('/auth',registration)
module.exports=_;