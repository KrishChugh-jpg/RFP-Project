const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller');

// login route
router.post('/login',userController.loginUser);
router.post('/rfpCreate',userController.rfpCreate);
router.post('/categoryCreate',userController. categoryCreate);
router.post('/categoryRfpCreate',userController.categoryRfpCreate);
//signup route
router.post('/signup',userController.signupUser);
router.get('/vendor',userController.vendorUser);
router.get('/admin',userController.adminUser);

router.get('/profile/:email',userController.getProfile);



//reset-password validate route
router.post('/reset-validate',userController.validateReset);

//change password route


//user profile routes
router.get('/profile/:email',userController.getProfile);
router.patch('/profile/:email',userController.updateProfile);





module.exports = router;



