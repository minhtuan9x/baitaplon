const express = require('express');
const building = require('../controllers/BuildingController');
const router = express.Router();


//[GET] /building  
router.get('/',building.index);
//[GET] /building  
router.get('/customer',building.detailview);
//[GET] buidling/insert  
router.get('/insert',building.insertView);
//[GET] building/:id/update  
router.get('/:id/update',building.updateView);

//[GET] building/:nameBuilding/search
router.get('/search',building.searchName)
//[POST] /building/insert
router.post('/insert',building.insertModel)
//[PUT] /building/:id/update
router.put('/:id/update',building.updateModel)
//[DELETE] /building/:id/delete
router.delete('/:id/delete',building.deleteModel)

module.exports = router;