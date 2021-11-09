const mongoose = require("mongoose");
var renttypeSchema = mongoose.Schema({
    name:String
})
var renttype = mongoose.model("renttype",renttypeSchema);
module.exports = renttype;