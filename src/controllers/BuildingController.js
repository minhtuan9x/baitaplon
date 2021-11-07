
class BuildingController{

    index(req, res){
        res.send('building');
    }

}
module.exports = new  BuildingController;