
class BuildingController{
    //[GET]  /building
    index(req, res){
        res.send('building');
    }

    //[GET] /building/insert
    insert(req,res){
        res.send('viewInsert');
    }
    
}
module.exports = new  BuildingController;