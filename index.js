const express = require("express")
const app = express()
const chalk=require("chalk");
const cors = require("cors")
const userRouter = require("./routes/usersRouter")

//midleware....
app.use(express.urlencoded({extended:true}))
app.use(express.json)
app.use(cors())

app.use('/',userRouter)

app.listen(3000,()=>{
    console.log(chalk.bgYellow("Running on port 3000"))
})