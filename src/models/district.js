const mongoose = require("mongoose");
var districtSchema = mongoose.Schema({
    name:String
})
var district = mongoose.model("district",districtSchema);
module.exports = district;