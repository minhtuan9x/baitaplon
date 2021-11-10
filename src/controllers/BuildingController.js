const building = require('../models/building');
const district = require('../models/district');
const renttype = require('../models/renttype');
class BuildingController {

<<<<<<< HEAD
class BuildingController{
//[GET] /building  
index(req,res){
    res.render('building/indexBuilding');
}
//[GET] buidling/insert  
insertView(req,res){
    res.render('building/addBuilding')
}
//[GET] building/:id/update  
updateView(req,res){
    var id = req.params.id;
    building.findOne({_id:id},function(err,data){
        if(err) 
            res.send(err);
        else
            //res.render('/editBuilding',{item : data});
            res.send(data);
    })
}
//[GET] /search/:nameBuilding
searchName(req,res){
    var nameBuilding = req.query.nameBuilding.toString(); 
    building.find({name:nameBuilding},function(err,data){
        res.render('buidling/searchBuilding',{list:data});
    });
}
//[POST] /building/insert
insertModel(req, res){
    var dataInsert = req.body;
    var dataBuilding = {
        "name":dataInsert.nameBuilding,
        "rentarea":dataInsert.rentareaBuilding,
        "imagelink":dataInsert.imagelinkBuilding,
        "street":dataInsert.streetBuilding,
        "districtid":dataInsert.districtidBuilding,
        "ward":dataInsert.wardBuilding,
        "renttypeids":dataInsert.renttypeidsBuilding,
        "note":dataInsert.noteBuilding,
        "managername":dataInsert.managernameBuilding,
        "rentprice":dataInsert.rentpriceBuilding,
        "sellprice":dataInsert.sellpriceBuilding,
=======
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
                        var dataBuilding = {
                            "name": item.name,
                            "rentarea": item.rentarea,
                            "imagelink": item.imagelink,
                            "address": item.street + "-" + item.ward + "-" + dis,
                            "renttypes": rents,
                            "note": item.note,
                            "managername": item.managername,
                            "rentprice": item.rentprice,
                            "sellprice": item.sellprice
                        }
                        results.push(dataBuilding)
                    });
                    res.json(results);
                    //res.render('/building/index',{listBuilding:results});
                })
            })
        })
    }

    //[GET] buidling/insert  
    insertView(req, res) {
        res.render('/building/addBuilding')
    }
    //[GET] building/:id/update  
    updateView(req, res) {
        var id = req.params.id;
        building.findOne({ _id: id }, function (err, data) {
            if (err)
                res.send(err);
            else
                res.render('/editBuilding', { item: data });
        })
    }
    //[GET] /search/:nameBuilding
    searchName(req, res) {
        var nameBuilding = req.query.nameBuilding.toString();
        building.find({ name: nameBuilding }, function (err, data) {
            res.render('/buidling/searchBuilding', { list: data });
        });
>>>>>>> d5a88a7ba61e6c1a76f86eeb5cc3bad9d14727eb
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


}



module.exports = new BuildingController;