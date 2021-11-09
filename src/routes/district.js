const district = require("../controllers/district");
const express = require('express');
const router =express.Router();

router.get('/:id',district.getByDistrictID)
router.get('/', district.getAll)

module.exports = router;