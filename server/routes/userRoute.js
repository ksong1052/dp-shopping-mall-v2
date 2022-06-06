const express = require("express");
const userRoutes = express.Router();
const { 
  userRegisterCtrl,
  userLoginCtrl,
  userLogoutCtrl
} = require("../controllers/userController");
const { auth } = require('../middleware/auth');


// REST API:  Route connects End-point
userRoutes.post('/register', userRegisterCtrl);
userRoutes.post('/login', userLoginCtrl);
userRoutes.get('/logout', auth, userLogoutCtrl);

module.exports = userRoutes;