const mongoose = require("mongoose");
var districtSchema = mongoose.Schema({
    id:Number,
    code:String,
    name:String
})
var district = mongoose.model("district",districtSchema);

module.exports = district;