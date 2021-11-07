const express = require('express');
const building = require('../controllers/BuildingController');
const router = express.Router();



router.get('/',building.index);
router.get('/insert',building.insert);
router.get('/update',building.update);

module.exports = router;