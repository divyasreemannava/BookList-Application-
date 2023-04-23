const mongoose = require("mongoose");
const loginSchema = mongoose.Schema({
    name:{type:String},
    password:{type:String},
})


const User = mongoose.model("User",loginSchema)

module.exports = User