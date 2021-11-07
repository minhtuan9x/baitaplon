const express = require('express');
const router = express.Router();
const user = require('../controllers/UserController');


router.use('/',user.index);



module.exports = router;