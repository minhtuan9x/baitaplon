const mongoose = require("mongoose");
var url = 'mongodb://localhost:27017/quanlibatdongsan'; 
mongoose.connect(url);
module.exports = mongoose;