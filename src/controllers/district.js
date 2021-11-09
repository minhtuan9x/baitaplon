const district = require("../models/district.js");
const mongoose = require("mongoose")
const util = require("../util/util")

module.exports.getByDistrictID = function (req, res) {
    district.findOne({ _id: util.checkObjectID(req.params.id) }, function (err, data) {
        if (err) throw err;
        res.json(data);
    })
}
module.exports.getAll = function (req, res) {
    district.find(function (err, data) {
        if (err) throw err;
        res.json(data);
    })
}
