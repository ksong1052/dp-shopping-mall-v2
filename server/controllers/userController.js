/* 
  해당 폴더의 index.js에 정의를 해 주면 생략 가능하다.
*/
const jwt = require('jsonwebtoken');
const expressAsyncHandler = require('express-async-handler');

/* Getting Schema */ 
const { User } = require('../models');

const generateToken = require('../config/token/generateToken');

/* User Register */ 
const userRegisterCtrl = expressAsyncHandler( async(req, res, next) => {

  // check if user exist
  const userExists = await User.findOne({ email: req?.body?.email });
  if(userExists) throw new Error("User already exists");

  const user = new User(req.body);

  user.save((err, userInfo) => { 
    if(err) return res.status(400).json({ registerSuccess: false, err });  

    return res.status(200).json({
      registerSuccess: true             
    })
  })
});

/* User Login */
const userLoginCtrl = expressAsyncHandler( async(req, res, next) => {
  const { email, password } = req?.body;

  // check if user exists
  const userFound = await User.findOne({ email });  

  // Check if password is matched && Generating Token
  if(userFound && (await userFound.isPasswordMatched(password))){    

    userFound.generateToken((err, user) => {
      if(err) return res.status(400).send(err);      

      // Generating and Saving Token at Cookie
      res.cookie("u_auth", user.token)
        .status(200)
        .json({
          loginSuccess: true,
          userId: user?._id,
          username: user?.username,
          email: user?.email,
          profilePic: user?.profilePic,
          role: user?.role,
          token: user?.token
        })
    })
  } else {
    res.status(400);
    throw new Error('Invalid Login Credentials');
  }
});

/* User Logout */
const userLogoutCtrl = (req, res) => {
  User.findByIdAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
  // User.findByIdAndUpdate({ _id: req.body._id }, { token: "", tokenExp: "" }, (err, doc) => { // middleware인 auth를 사용하지 않을 때
    if(err) return res.status(400).json({ success: false, err });

    // token을 cookie에서 삭제 해야 함.

    return res.status(200).json({
      logoutSuccess: true
    });
  });
};

module.exports = {
  userRegisterCtrl,
  userLoginCtrl,
  userLogoutCtrl
}