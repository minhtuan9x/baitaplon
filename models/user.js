const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/quanlibatdongsan');
var userSchema = mongoose.Schema({
    id: Number,
    fullname: String,
    username:String,
    password:String,
    phone:String,
    email:String,
    roleid:Number
});
var user = mongoose.model("user", userSchema);
module.exports = user;
