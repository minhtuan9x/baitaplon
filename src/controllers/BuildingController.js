
class BuildingController{
    //[GET]  /building
    index(req, res){
        res.render('index');
    }

    //[GET] /building/insert
    insert(req,res){
        res.render('add');
    }
    update(req,res){
        res.render('edit');
    }
    
}
module.exports = new  BuildingController;