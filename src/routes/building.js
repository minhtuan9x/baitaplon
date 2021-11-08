const express = require('express');
const building = require('../controllers/BuildingController');
const router = express.Router();


//[GET] /  
router.get('/',building.index);
//[GET] /insert  
router.get('/insert',building.insertView);
//[GET] /update  
router.get('/update',building.updateView);





module.exports = router;