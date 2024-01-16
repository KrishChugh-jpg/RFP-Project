const express = require('express');
const router = express.Router();
const categoryController = require('../Controllers/category.controller');

router.post('/delete',categoryController.deleteCategory);

module.exports = router;