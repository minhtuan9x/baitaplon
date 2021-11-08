const mongoose = require("mongoose");
var buildingSchema = mongoose.Schema({
    name:String,
    street:String,
    ward:String,
    districtid:Number,
    rentprice:String,
    rentarea:String,
    electricfee:String,
    waterfee:String,
    imagelink:String,
    managerphone:String,
    managername:String,
    sellprice:String,
    mortobikefee:String,
    carfee:String,
    renttypeids:Array,
    directory:String,
    note:String

})
var building = mongoose.model("building",buildingSchema);
module.exports  = building;