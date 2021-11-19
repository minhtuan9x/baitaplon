const mongoose = require("mongoose");
var customerSchema = mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    type:String,
    status:String
})
var customer = mongoose.model("customer",customerSchema);
module.exports = customer;