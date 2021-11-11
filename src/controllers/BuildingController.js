const building = require('../models/building');
const district = require('../models/district');
const renttype = require('../models/renttype');

class BuildingController {
    //[GET] /building  
    index(req, res) {
        if (req.query.name != null) {
        building.find({name:req.query.name},function (err, data) {
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
                                "sellprice": item.sellprice
                            }
                            results.push(dataBuilding)
                        });
                        // res.json(results);
                        res.render('building/index', { listBuilding: results });
                    })
                })
            })//
        } else {
            building.find(function (err, data) {
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
                                "sellprice": item.sellprice
                            }
                            results.push(dataBuilding)
                        });
                        // res.json(results);
                        res.render('building/index', { listBuilding: results });
                    })
                })
            })//
        }


    }
    //[GET] buidling/insert  
    insertView(req, res) {
        district.find(function (err, district) {
            renttype.find(function (err, rentypes) {
                var data = {
                    "district": district,
                    "renttype": rentypes
                }
                res.render('building/addBuilding', { data: data })
            })
        })

    }
    //[GET] /search
    searchName(req, res) {
        var nameBuilding = req.query.nameBuilding.toString();
        building.find({ name: nameBuilding }, function (err, data) {
            res.render('buidling/searchBuilding', { list: data });
        });
    }
    //[GET] building/:id/update  
    updateView(req, res) {
        var id = req.params.id;

        //   var dataBuilding,dataDictrict
        building.findOne({ _id: id }, function (err, dataBuilding) {
            if (err)
                res.send(err);
            else {
                district.find(function (err, dataDictrict) {
                    renttype.find(function (err, dataRenttype) {

                        var Data = {
                            building: dataBuilding,
                            district: dataDictrict,
                            renttype: dataRenttype
                        }
                        res.render('Building/editBuilding', { data: Data });
                    })

                })
            }
        })


    }
    //[GET] /search/:nameBuilding
    searchName(req, res) {
        var nameBuilding = req.query.nameBuilding.toString();
        building.find({ name: nameBuilding }, function (err, data) {
            res.render('/buidling/searchBuilding', { list: data });
        });
    }
    //[POST] /building/insert
    insertModel(req, res) {
        var dataInsert = req.body;
        var dataBuilding = {
            "name": dataInsert.name,
            "rentarea": dataInsert.rentarea,
            "imagelink": dataInsert.imagelink,
            "street": dataInsert.street,
            "districtid": dataInsert.districtid,
            "ward": dataInsert.ward,
            "renttypeids": dataInsert.rentypes,
            "note": dataInsert.note,
            "managername": dataInsert.managername,
            "managerphone": dataInsert.managerphone,
            "rentprice": dataInsert.rentprice,
            "sellprice": dataInsert.sellprice,
        }
        building.create(dataBuilding, function (err, result) {
            if (err)
                res.send("INSERT FAILURE");
            else {
                res.json({
                    "status": "success"
                });
            }
        });
    }
    //[PUT] /building/:id/update
    updateModel(req, res) {
        var id = req.params.id;
        var dataUpdate = req.body;
        var dataBuilding = {
            "name": dataUpdate.name,
            "rentarea": dataUpdate.rentarea,
            "imagelink": dataUpdate.imagelink,
            "street": dataUpdate.street,
            "districtid": dataUpdate.districtid,
            "ward": dataUpdate.ward,
            "renttypeids": dataUpdate.rentypes,
            "note": dataUpdate.note,
            "managername": dataUpdate.managername,
            "managerphone": dataUpdate.managerphone,
            "rentprice": dataUpdate.rentprice,
            "sellprice": dataUpdate.sellprice,
        }
        building.updateOne({ _id: id }, dataBuilding, function (err, data) {
            if (err)
                res.send(err);
            else
                res.json("ok");
        })
    }
    //[DELETE] /building/:id/delete
    deleteModel(req, res) {
        var id = req.params.id;
        building.deleteOne({ _id: id }, function (err, data) {
            if (err)
                res.send(err);
            else {
                res.status(200).json("oke");
            }
        })

    }
}

module.exports = new BuildingController;