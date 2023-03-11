//mongodb+srv://ecommerce:gRLAHfotfknFqumo@cluster0.qaoos47.mongodb.net/ecommerce?retryWrites=true&w=majority
const mongoose = require('mongoose');
const chalk = require("chalk")

const setupDb = ()=>{
    mongoose.set('strictQuery',false)
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log(chalk.bgGreen('DataBase Connected!')));
}
module.exports=setupDb;