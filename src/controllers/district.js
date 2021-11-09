const district = require("../models/district.js");

module.exports.getByDistrictID = function (req, res) {
    district.findOne({
        _id: req.params._id, function(err, data) {
            if (err) throw err;
            res.json(data);
        }
    })
}
module.exports.getAll = function (req, res) {
    district.find(function (err, data) {
        if (err) throw err;
        res.json(data);
    })
}
