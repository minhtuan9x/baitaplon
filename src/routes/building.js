const express = require('express');
const building = require('../controllers/BuildingController');
const router = express.Router();



router.get('/',building.index);
router.post('/',building.insert);
router.put('/',building.update);

module.exports = router;