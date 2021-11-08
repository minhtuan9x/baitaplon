
class HomePageController{

    //[GET] / (HOME PAGE)
    index(req, res){
        res.render('home/index');
       // res.send('HOME PAGE')
    }

}
module.exports = new HomePageController;