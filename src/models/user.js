const mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    id:Number,
    fullname:String,
    username:String,
    password:String,
    phone:Number,
    email:String,
    roleid:Number
})
var user = mongoose.model("user",userSchema);
module.exports  = user;