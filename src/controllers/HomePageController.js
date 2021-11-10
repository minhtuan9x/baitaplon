
class HomePageController{

    //[GET] / (HOME PAGE)
    index(req, res){
       res.render("index");
    }

}
module.exports = new HomePageController;