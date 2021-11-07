
class HomePageController{

    //[GET] / (HOME PAGE)
    index(req, res){
        res.send('HOME PAGE');
    }

}
module.exports = new HomePageController;