const { User } = require('../models');
const config = require('../config/config');

const auth = (req, res, next) => {
  // 1. Getting token from cookies
  
  // client 브라우저의 cookie에 정보를 저장하면 아래의 부분을 사용해야 한다.
  // cookie-parser를 설치해 줘야 cookie값을 가져 올 수 있다.
  let token = req.cookies.u_auth;   
  // console.log({token});

  if(token) {
    //Decoding Token to find out the user
    User.findByToken(token, (err, user) => {
      if(err) throw err;
      if(!user){
        return res.status(400).json({
          isAuth: false,
          error: true
        });
      }

      // Sending user information to others
      req.token = token;
      req.user = user;
      next();
    });
  } else {
    throw new Error('There is no token attached to the header');
  }
  

  // 2. Getting token from Headers => postman에서 test시에 사용
  // if(req?.headers?.authorization?.startWith('Bearer')) {
  //   token = req.headers.authorization.split(' ')[1];

  //   console.log({ token });

  //   if(token) {
  //     // Decoding Token to find out the user
  //     User.findByToken(token, (err, user) => {
  //       if(err) throw err;
  //       if(!user){
  //         return res.status(400).json({
  //           isAuth: false,
  //           error: true
  //         });
  //       }

  //       // Sending user information to others
  //       req.token = token;
  //       req.user = user;
  //       next();
  //     });      
  //   } else {
  //     throw new Error('There is no token attached to the header');
  //   }
  // } else {
  //   throw new Error('There is no token attached to the header');
  // }
}

module.exports = { auth };