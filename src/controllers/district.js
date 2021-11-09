const district = require("../models/district.js");

module.exports.getByDistrictID = function (districtID, callBack) {
    district.findOne({
        _id: district, function(err, data) {
            if (err) throw err;
            callBack(data);
        }
    })
}