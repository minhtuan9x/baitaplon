const express = require('express');
const building = require('../controllers/BuildingController');
const router = express.Router();


//[GET] /building  
router.get('/',building.index);
//[GET] /building/customer  
router.get('/customer',building.detailview);
//[GET] /building/:id/customer  
router.get('/:id/customer',building.getCusByBuildingID);
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

// [POST] /building/:id/comment
router.post('/:id/comment',building.insertComment)

// [GET] /building/:id/comment
router.get('/:id/comment',building.getCmt)

//[POST] /building/:id/customer
router.post('/:id/customer',building.insertCustomer)
//[PUT] /building/:idBuilding/customer/:idCustomer


module.exports = router;