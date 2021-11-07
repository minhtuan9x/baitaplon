const express = require('express');
const router = express.Router();
const user = require('../controllers/UserController');


router.get('/',user.findAll);



module.exports = router;