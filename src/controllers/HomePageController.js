const building = require('../models/building');
const district = require('../models/district');
const renttype = require('../models/renttype');
class HomePageController {

    //[GET] / (HOME PAGE)
    index(req, res) {
        var nameInput = new RegExp(req.query.name, 'i');
        building.find({ name: nameInput }, function (err, data) {
            if (err) throw err
            district.find(function (err, distrcits) {
                renttype.find(function (err, rentypes) {
                    var results = [];
                    var dis;
                    data.forEach(item => {
                        var rents = [];
                        distrcits.forEach(item2 => {
                            if (item2._id == item.districtid)
                                dis = item2.name;
                        })
                        item.renttypeids.forEach(item4 => {
                            rentypes.forEach(item3 => {
                                if (item3._id == item4) {
                                    rents.push(item3.name)
                                }

                            })
                        })
                        // var xuli = unique(rents)
                        var dataBuilding = {
                            "_id": item._id,
                            "name": item.name,
                            "rentarea": item.rentarea,
                            "imagelink": item.imagelink,
                            "address": item.street + "-" + item.ward + "-" + dis,
                            "renttypes": rents,
                            "note": item.note,
                            "managername": item.managername,
                            "managerphone": item.managerphone,
                            "rentprice": item.rentprice,
                            "sellprice": item.sellprice,
                            "rank": item.rank
                        }
                        results.push(dataBuilding)
                    });
                    // res.json(results);
                    res.render('index', { listBuilding: results });
                })
            })
        })

    }

}
module.exports = new HomePageController;