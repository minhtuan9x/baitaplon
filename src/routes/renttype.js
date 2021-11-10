const express = require('express');
const router = express.Router();
const renttype = require('../controllers/renttypeController');






//[GET] /renttype
router.get('/',renttype.index);
//[GET] /renttype/insert
router.get('/insert',renttype.insertView);
//[GET] /:id/search
router.get('/search',renttype.searchName);
//[POST] /renttype/insert
router.post('/insert',renttype.insertModel);
//[GET]  /renttype/:id/update
router.get('/:id/update',renttype.updateView);
//[PUT] /renttype/:id/update
router.put('/:id/update',renttype.updateModel);
//[DELETE] /renttype/:id/delete
router.delete('/:id/delete',renttype.deleteModel);


module.exports = router;