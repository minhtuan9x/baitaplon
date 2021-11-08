const building = require('../models/building');


class BuildingController{
    //[GET]  /building
    index(req, res){
    //    building.findOne({name:"building 1"},function(err,data){
    //         if(err) 
    //             res.send(err);
    //         else{
    //            res.render('show',{item:data});
               
    //         }
    //    })
       building.find(function(err,data){
             res.json(data);
       })
    }

    //[GET] /building/insert
    insertView(req,res){
        res.render('add');
    }
    updateView(req,res){
        res.render('edit');
    }
    
}
module.exports = new  BuildingController;