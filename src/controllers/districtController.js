const district = require("../models/district.js");

class districtController{

    //[GET] /district
    index(req,res){
        district.find(function(err,data){
            if(err)
                res.send(err);
            else{
                res.render('district/indexDictrict',{list:data});
                //res.send(data);
            }
        })
    }
    //[GET] /district/insert
    insertView(req,res){
        res.render('district/addDistrict');
    }
    //[GET] /district/:id/update
    updateView(req,res){
        var idDistrict = req.params.id;
        district.findById(idDistrict,function(err,data){
            if(err)
                res.send(err);
            else{
             res.render('district/editDistrict',{item:data});
              // res.send(data);
            }
        })
    }
    //[GET] /district/search/:nameDistrict
    search(req,res){
        var nameDistrict = req.query.nameDistrict.toString();
        district.findOne({name:district},function(err,data){
            res.render('district/searchDistrict',{item:data});      
        })
    }
    //[POST] /district/:id/insert
    insertModel(req,res){
        var data = req.body;
        var dataDictrict = {
            name : data.nameDistrict
        }
        district.create(dataDictrict,function(err,data){
            if(err)
                res.send(err);
            else
                res.redirect('/district');
        })

    }
    //[PUT] /district/:id/update
    updateModel(req,res){
        var idDistrict = req.params.id;
        var dataBody = req.body;
        var dataDistrict = {
            name: dataBody.nameDistrict
        }
        district.updateOne({_id:idDistrict},dataDistrict,function(err,data){
            if(err)
                res.send(err);
            else
                res.redirect('/district');    
        })
    }
    //[DELETE] /district/:id/delete
    deleteModel(req,res){
        var idDictrict = req.params.id;
        district.deleteOne({_id:id},function(err,data){
            if(err)
                res.send(err);
            else{
                res.redirect('/district');
            }
        })
    }
}
module.exports = new districtController;

