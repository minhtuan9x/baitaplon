const homePageController = require('../controllers/HomePageController');
const buildingRoute = require('../routes/building');


function route(app) {

   
    app.use('/building',buildingRoute); 




    app.use('/',homePageController.index);
}
module.exports = route;