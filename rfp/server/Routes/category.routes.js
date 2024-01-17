const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/category.controller');

router.post('/delete',categoryController.deleteCategory);
router.post('/create',categoryController.createCategory);
router.get('/',categoryController.getCategories);

module.exports = router;