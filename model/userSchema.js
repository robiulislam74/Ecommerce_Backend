const mongoose = require('mongoose')
const {schema} = mongoose

const userSchema = new schema({
    email:{
        type: String, 
        unique: true,
        require: true,
    },
    phone:{
        type: String,
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    password:{
        type: String,
        require: true,
    },
    verification:{
        type: String,
        default: false,
    },
    merchant:{
        type:mongoose.Types.ObjectId,
        default: null,
        ref:"merchant",
    },
    gooleId:{
        type: String,
    },
    facebookId:{
        type: String,
    },
    avater:{
        type: String,
    },
    role:{
        type: String,
        default: "member",
        enum:["member","merchant","admin",]
    },
    resetPasswordToken:{
        type: String,
    },
    resetPasswordExpires:{
        type: Date,
    },
    resetPasswordExpires:{
        type: Date,
    },
    created:{
        type: Date,
        default: Date.now,
    },
    updated:{
        type: Date,
    }
})

const User = mongoose.model("User",userSchema)
module.exports = User;