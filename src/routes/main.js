const homePageController = require('../controllers/HomePageController');
const buildingRoute = require('../routes/building');
const districtRoute = require('../routes/district');
const renttypeRoute = require('../routes/renttype');

function route(app) {
    
    app.use('/building',buildingRoute); 
    app.use('/district',districtRoute); 
    app.use('/renttype',renttypeRoute);
    
    app.use('/',homePageController.index);
}


module.exports = route;