var user = require("../models/user")
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
}
module.exports = new UserController;