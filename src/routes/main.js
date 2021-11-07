const homePageController = require('../controllers/HomePageController');
const buildingRoute = require('../routes/building');
const userRoute = require('./user');
const express = require('express');
const router = express.Router();

function route(app) {

    app.use('/building',buildingRoute); 
    app.use('/user',userRoute);
    app.use('/',homePageController.index);

}


module.exports = route;