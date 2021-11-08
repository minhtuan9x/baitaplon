const building = require('../models/building');


class BuildingController{
    //[GET]  /building
    index(req, res){
       building.find(function(err,data){
            if(err) 
                res.send(err);
            else{
                res.send(data);
            }
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