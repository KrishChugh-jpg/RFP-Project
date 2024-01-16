const express = require('express');
const router = express.Router();
const rfpController = require('../Controllers/rfp.controller');

router.post('/create',rfpController.createRFP);
router.post('/update',rfpController.updateRFP);
router.get('/',rfpController.getRFPs);

module.exports = router;