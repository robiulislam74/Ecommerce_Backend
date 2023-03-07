const express = require("express")
const app = express()
const chalk=require("chalk");

app.get('/',function(req,res){
    res.send("Hellow Local Host Here!")
})

app.listen(3000,()=>{
    console.log(chalk.bgYellow("Running on port 3000"))
})