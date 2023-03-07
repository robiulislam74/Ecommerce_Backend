const express = require("express")
const app = express()
const chalk=require("chalk");

app.get('/',function(req,res){
    res.send([
        {
            name:"Robiul Islam"
        },
        {
            name:"Anik Hasan"
        },
        {
            name:"Rakib Hasan"
        },
        {
            name:"Khalid Hasan"
        },
        {
            name:"Sofiqul Islam"
        }
    ])
})

app.get('/test',function(req,res){
    res.send([
        {
            message:"Successfully Done"
        }
    ])
})

app.listen(3000,()=>{
    console.log(chalk.bgYellow("Running on port 3000"))
})