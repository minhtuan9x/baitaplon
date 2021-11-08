const homePageController = require('../controllers/HomePageController');
const buildingRoute = require('../routes/building');

const express = require('express');
const router = express.Router();

function route(app) {

    app.use('/building',buildingRoute); 
    
    app.use('/',homePageController.index);
}


module.exports = route;