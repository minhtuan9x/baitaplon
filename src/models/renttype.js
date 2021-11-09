const mongoose = require("mongoose");
var renttypeSchema = mongoose.Schema({
    id:Number,
    code:String,
    name:String
})
renttype = mongoose.model("renttype",renttypeSchema);
module.exports = renttype;