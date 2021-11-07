
class UserController{
   //[GET] /user
   index(req, res){
       res.send('HOME PAGE USER');
   }
}
module.exports = new UserController;