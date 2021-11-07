const mongoose = require("mongoose");
var url = 'mongodb://localhost:27017/quanlibatdongsan';
function connectDB() {
    try {
        mongoose.connect(url);
        console.log("connect successful");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB;