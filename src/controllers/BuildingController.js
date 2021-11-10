const building = require('../models/building');
const district = require('../models/district');
const renttype = require('../models/renttype');

class BuildingController {
    //[GET] /building  
    index(req, res) {
        building.find(function (err, data) {
            if (err) throw err
            district.find(function (err, distrcits) {
                renttype.find(function (err, rentypes) {
                    var results = [];
                    var dis;
                    var rents = [];
                    data.forEach(item => {
                        distrcits.forEach(item2 => {
                            if (item2._id == item.districtid)
                                dis = item2.name;
                        })
                        rentypes.forEach(item3 => {
                            item.renttypeids.forEach(item4 => {
                                if (item3._id == item4)
                                    rents.push(item3.name)
                            })
                        })
                        var xuli = unique(rents)
                        var dataBuilding = {
                            "_id": item._id,
                            "name": item.name,
                            "rentarea": item.rentarea,
                            "imagelink": item.imagelink,
                            "address": item.street + "-" + item.ward + "-" + dis,
                            "renttypes": xuli,
                            "note": item.note,
                            "managername": item.managername,
                            "managerphone": item.managerphone,
                            "rentprice": item.rentprice,
                            "sellprice": item.sellprice
                        }
                        results.push(dataBuilding)
                    });
                    //res.json(results);
                    res.render('building/index', { listBuilding: results });
                })
            })
        })

    }
    //[GET] buidling/insert  
    insertView(req, res) {
        res.render('building/addBuilding')
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
            else
            {
                district.find(function(err,dataDictrict){
                    renttype.find(function(err,dataRenttype){
                        var Data = {
                            building: dataBuilding,
                            district: dataDictrict,
                            renttype: dataRenttype
                    }
                    res.send(Data.district[1].name);
                   // res.render('building/editBuilding',{item: Data});
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
            "name": dataInsert.nameBuilding,
            "rentarea": dataInsert.rentareaBuilding,
            "imagelink": dataInsert.imagelinkBuilding,
            "street": dataInsert.streetBuilding,
            "districtid": dataInsert.districtidBuilding,
            "ward": dataInsert.wardBuilding,
            "renttypeids": dataInsert.renttypeidsBuilding,
            "note": dataInsert.noteBuilding,
            "managername": dataInsert.managernameBuilding,
            "rentprice": dataInsert.rentpriceBuilding,
            "sellprice": dataInsert.sellpriceBuilding,
        }
        building.create(dataBuilding, function (err, result) {
            if (err)
                res.send("INSERT FAILURE");
            else {
                res.redirect('/building');
            }
        });
    }
    //[PUT] /building/:id/update
    updateModel(req, res) {
        var id = req.param.id;
        var dataUpdate = req.body;
        var dataBuilding = {
            "name": dataUpdate.nameBuilding,
            "rentarea": dataUpdate.rentareaBuilding,
            "imagelink": dataUpdate.imagelinkBuilding,
            "street": dataUpdate.streetBuilding,
            "districtid": dataUpdate.districtidBuilding,
            "ward": dataUpdate.wardBuilding,
            "renttypeids": dataUpdate.renttypeidsBuilding,
            "note": dataUpdate.noteBuilding,
            "managername": dataUpdate.managernameBuilding,
            "rentprice": dataUpdate.rentpriceBuilding,
            "sellprice": dataUpdate.sellpriceBuilding,
        }
        building.updateOne({ _id: id }, dataBuilding, function (err, data) {
            if (err)
                res.send(err);
            else
                res.redirect('/building');
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
function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

module.exports = new BuildingController;