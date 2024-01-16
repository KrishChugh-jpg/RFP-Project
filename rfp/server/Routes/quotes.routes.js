const express = require('express');
const router = express.Router();
const quoteController = require('../Controllers/rfp_quotes.controller');

router.post('/create',quoteController.createQuote);
router.post('/update',quoteController.updateQuote);
router.get('/',quoteController.getQuotes);

module.exports = router;