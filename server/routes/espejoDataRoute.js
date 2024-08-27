const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const espejoDataController = require('../controller/espejoDataController');


router.get('/espejo', espejoDataController.getAllEspejoDatas);
router.post('/espejo', espejoDataController.createEspejoData);
/*
router.put('/espejo/:id', espejoDataController.updateEspejoData);
router.delete('/espejo/:id', espejoDataController.deleteEspejoData);
*/

module.exports = router;
