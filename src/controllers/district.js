const district = require("../models/district.js");
const mongoose = require("mongoose")

module.exports.getByDistrictID = function (req, res) {
    district.findOne({ _id: checkObjectID(req.params.id) }, function (err, data) {
        if (err) throw err;
        res.json(data);
    })
}
function checkObjectID(id) {
    if (id.length == 24)
        return mongoose.mongo.ObjectId(id);
    return null;
}
module.exports.getAll = function (req, res) {
    district.find(function (err, data) {
        if (err) throw err;
        res.json(data);
    })
}
