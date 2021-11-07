var user = require("../models/user");
var role = require("../models/role");
var building = require("../models/building")
var assignmentbuiding = require("../models/assignmentbuiding")
class UserController {

    //[GET] /user
    index(req, res) {
        res.send('HOME PAGE USER');
    }
    findAll(req, res) {
        user.find(function (err, data) {
            res.json(data);
        })
    }
    getAllStaff(req, res) {//id = 1 la staff
        user.find((err, data) => {
            var results = [];
            data.forEach(i => {
                if (i.roleid = 1) {
                    results.push(i);
                }
            })
            res.json(results);
        })
    }
    getStaffbyStaffID(staffid, callback) {
        user.findOne({ id: staffid }, function (err, data) {
            callback(data);
        })
    }
    getAllStaffByBuildingID(req, res) {
        var listStaffID;
        assignmentbuiding.forEach(i => {
            if (req.body.buildingid == i.buildingid)
                listStaffID.push(i.staffid)
        })
        var results = [];
        listStaffID.forEach(i => {
            this.getStaffbyStaffID(i,data=>{
                results.push(data);
            })
        })
         res.json(results);

    }
}
module.exports = new UserController;