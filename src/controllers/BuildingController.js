const building = require('../models/building');
const district = require('../models/district');
const renttype = require('../models/renttype');
const customer = require('../models/customer');

class BuildingController {
    // [GET] /building  
    index(req, res) {
        var nameInput = new RegExp(req.query.name, 'i');
        building.find({ name: nameInput }, function (err, buildings) {
            if (err) throw err
            district.find(function (err, distrcits) {
                renttype.find(function (err, rentypes) {
                    var results = [];
                    var dis;
                    buildings.forEach(item => {
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
                        var dataBuilding = toBuildingRespone(item, dis, rents);
                        results.push(dataBuilding)
                    });
                    res.render('building/index', { listBuilding: results, namesearch: req.query.name });
                })
            })
        })//
    }
    // [GET] /building/customer  
    detailview(req, res) {
        var nameInput = new RegExp(req.query.name, 'i');
        building.find({ name: nameInput }, function (err, buildings) {
            if (err) throw err
            district.find(function (err, distrcits) {
                renttype.find(function (err, rentypes) {
                    customer.find(function (err, customers) {
                        var results = [];
                        var dis;
                        var cuss = [];
                        buildings.forEach(item => {
                            var rents = [];
                            cuss = [];
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
                            customers.forEach(item5 => {
                                item.customerids.forEach(item6 => {
                                    if (item5._id.toString() == item6) {
                                        cuss.push(item5)
                                    }
                                })
                            })
                            var dataBuilding = toBuildingRespone(item, dis, rents);
                            results.push(dataBuilding)
                        });
                        res.render('building/detail', { listBuilding: results ,listCustomer : cuss});
                    })
                })
            })
        })//
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
                        var listRentTypes = [];
                        dataRenttype.forEach(item => {
                            var flag = 0;
                            dataBuilding.renttypeids.forEach(item2 => {
                                if (item._id == item2) {
                                    flag++;
                                }
                            })
                            if (flag > 0) {
                                listRentTypes.push({
                                    "_id": item._id,
                                    "name": item.name,
                                    "checked": "checked"
                                })
                            } else {
                                listRentTypes.push({
                                    "_id": item._id,
                                    "name": item.name,
                                    "checked": ""
                                })
                            }
                        })
                        var listDistricts = [];
                        dataDictrict.forEach(item => {
                            if (item._id == dataBuilding.districtid) {
                                listDistricts.push({
                                    "_id": item._id,
                                    "name": item.name,
                                    "selected": "selected"
                                })
                            } else {
                                listDistricts.push({
                                    "_id": item._id,
                                    "name": item.name,
                                    "selected": ""
                                })
                            }

                        })
                        var Data = {
                            building: dataBuilding,
                            district: listDistricts,
                            renttype: listRentTypes
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
        var dataBuilding = toBuildingRequest(dataInsert);
        building.create(dataBuilding, function (err, result) {
            console.log(result);
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
        var dataBuilding = toBuildingRequest(dataUpdate);
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
function toBuildingRespone(item, dis, rents) {
    var result = {
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
    return result;
}
function toBuildingRequest(data) {
    var result = {
        "name": data.name,
        "rentarea": data.rentarea,
        "imagelink": data.imagelink,
        "street": data.street,
        "districtid": data.districtid,
        "ward": data.ward,
        "renttypeids": data.rentypes,
        "note": data.note,
        "managername": data.managername,
        "managerphone": data.managerphone,
        "rentprice": data.rentprice,
        "sellprice": data.sellprice,
    }
    return result;
}

module.exports = new BuildingController;