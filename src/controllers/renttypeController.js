const e = require('express');
const renttype = require('../models/renttype');

class renttypeController{
    //[GET] /renttype
    index(req,res){
        renttype.find(function(err,data){
            if(err)
                res.send(err);
            else{
                res.render('renttype/index',{list:data});
                //res.send(data);
            }
        })
    }
    //[GET] /renttype/insert
    insertView(req,res){
        res.render('renttype/insert');

    }
    //[GET] /renttype/search
    searchName(req,res){
        var nameRenttype = req.query.nameRenttype.toString(); 
        renttype.find({name:nameRenttype},function(err,data){
            res.render('renttype/searchRenttype',{list:data});
        });
    }
    //[POST] /renttype/insert
    insertModel(req,res){
        var data = req.body;
        var dataRenttype = {
            name : data.nameRenttype
        }
        renttype.create(dataRenttype,function(err,data){
            if(err)
                res.send(err);
            else{
                res.redirect('/renttype');
            }
        })
    }
    //[GET] /renttype/:id/update
    updateView(req,res){
        var idRenttype = req.params.id;
        res.send(idRenttype);
        renttype.findOne({_id:idRenttype},function(err,data) {
            if(err) 
                res.send(err);
            else{
                res.render('renttype/update',{list:data});
            }
            
        })
      

    }
    //[PUT] /renttype/:id/update
    updateModel(req,res){
        var idRenttype = req.params.id;
        var dataBody = req.body;
        var data = {
            name: dataBody.nameRenttype
        }
        renttype.updateOne({_id:idRenttype},data,function(err,data){
            if(err)
                res.send(err);
            else{
                res.redirect('/renttype');
            }
        })
        
    }
    //[DELETE] /renttype/:id/delete
    deleteModel(req,res){
        var idRenttype = req.params.id;
        renttype.deleteOne({_id:id},function(err,data){
            if(err)
                res.send(err);
            else{
                res.redirect('/renttype');
            }
        })
    }

}
module.exports = new renttypeController;