require('dotenv').config()
const express = require("express")
const chalk=require("chalk");
const cors = require("cors")
const routes = require("./routes")
const setupDb = require("./config/dbConfig")
const app = express()

//midleware....
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
setupDb();
app.use(routes)

app.listen(3000,()=>{
    console.log(chalk.bgYellow("Running on port 3000"))
})