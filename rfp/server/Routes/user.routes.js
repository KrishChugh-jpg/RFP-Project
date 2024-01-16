const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');
const vendorController = require('../Controllers/vendor.controller');
const categoryController = require('../Controllers/category.controller');
const rfpController = require('../Controllers/rfp.controller');

// User routes
router.post('/login', userController.loginUser);
router.post('/rfpCreate', userController.rfpCreate);
router.post('/categoryCreate', userController.categoryCreate);
router.post('/categoryRfpCreate', userController.categoryRfpCreate);
router.post('/signup', userController.signupUser);
router.get('/vendor', userController.vendorUser);
router.get('/admin', userController.adminUser);
router.get('/profile/:email', userController.getProfile);
router.patch('/profile/:email', userController.updateProfile);



// Category routes
router.post('/createCategory', categoryController.createCategory);
router.put('/updateCategory/:categoryNumber', categoryController.updateCategory);
router.get('/getCategories', categoryController.getCategories);

// RFP routes
router.post('/createRFP', rfpController.createRFP);
router.put('/updateRFP/:rfpId', rfpController.updateRFP);
router.get('/getRFPs', rfpController.getRFPs);

module.exports = router;
