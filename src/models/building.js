const mongoose = require("mongoose");
var buildingSchema = mongoose.Schema({
    name:String,
    rentarea:String,
    imagelink:String,
    street:String,
    districtid:String,
    ward:String,
    renttypeids:Array,
    note:String,
    managerphone:String,
    managername:String,
    rentprice:String,
    sellprice:String,
    customerids:Array
})
var building = mongoose.model("building",buildingSchema);
module.exports  = building;