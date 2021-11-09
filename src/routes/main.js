const homePageController = require('../controllers/HomePageController');
const buildingRoute = require('../routes/building');
const districtRoute = require('../routes/district');


function route(app) {

    app.use('/building',buildingRoute); 
    app.use('/district',districtRoute); 
    
    app.use('/',homePageController.index);
}


module.exports = route;