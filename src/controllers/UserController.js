var user = require("../models/user");
var role = require("../models/role")
class UserController {

    //[GET] /user
    index(req, res) {
        res.send('HOME PAGE USER');
    }
    findAll(req, res) {
        user.find(function (err,data) {
            res.json(data);
        })
    }
    getAllStaff(req,res){//id = 1 la staff
        user.find((err,data)=>{
            var results = [];
            data.forEach(i=>{
                if(i.roleid=1){
                    results.push(i);
                }
            })
             res.json(results);
        })
    }
}
module.exports = new UserController;