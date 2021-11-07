const mongoose = require("mongoose");
var roleSchema = mongoose.Schema({
    id:Number,
    code:String,
    name:String
})
var role = mongoose.model("role",roleSchema);
module.exports  = role;