const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController.js');
const shopController = require('../controllers/shopController.js')

const {signupValidation, loginValidation} = require("../middleware/userValidation.js")

//POST http://localhost:3000/signup
router.post('/signup', signupValidation, userController.userSignup)

//POST http://127.0.0.1:3000/login
router.post('/login', loginValidation, userController.userLogin)

//GET Products http://127.0.0.1:3000/shopProducts
router.get('/shopProducts', shopController)

exports.user = router