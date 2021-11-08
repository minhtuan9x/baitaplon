const express = require('express');
const router = express.Router();
const user = require('../controllers/UserController');


router.get('/',user.findAll);
router.get('/staff',user.getAllStaff);
router.get('/:id/staff',user.getAllStaffByBuildingID);


module.exports = router;