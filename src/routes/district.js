const district = require("../controllers/districtController");
const express = require('express');
const router =express.Router();

//[GET] /dictrict
router.get('/', district.index);

//[GET] /dictrict/insert
router.get('/insert',district.insertView);
//[GET] /dictrict/:id/update
router.get('/:id/update',district.updateView);
//[GET] /district/search/:nameDistrict
router.get('/search/:id',district.search);
//[POST] /district/insert
router.post('/insert',district.insertModel);
//[PUT] /district/:id/update
router.put('/:id/update',district.updateModel);
//[DELETE] /district/:id/delete
router.delete('/:id/delete',district.deleteModel);

module.exports = router;