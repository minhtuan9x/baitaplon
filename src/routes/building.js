const express = require('express');
const building = require('../controllers/BuildingController');
const router = express.Router();



router.use('/',building.index);

    




module.exports = router;