const mongoose = require("mongoose");
var buildingSchema = mongoose.Schema({
    id:Number,
    name:String,
    address:String,
    rentprice:String,
    rentarea:String,
    level:Number,
    electricfee:String,
    waterfee:String
})
var building = mongoose.model("building",buildingSchema);
module.exports  = building;