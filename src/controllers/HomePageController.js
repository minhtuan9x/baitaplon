
class HomePageController{

    //[GET] / (HOME PAGE)
    index(req, res){
        res.render('./home/index',{liststudent:{
            "name":"tuan",
            "mssv":123
        }});
       // res.send('HOME PAGE')
    }

}
module.exports = new HomePageController;