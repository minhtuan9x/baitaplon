const mongoose = require("mongoose");
var assignmentbuildingSchema = mongoose.Schema({
    id:Number,
    staffid:Number,
    buildingid:Number
})
var assignmentbuilding = mongoose.model("assignmentbuilding",assignmentbuildingSchema);
module.exports  = assignmentbuilding;