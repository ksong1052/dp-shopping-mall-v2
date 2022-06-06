const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const config = require('../config/config');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    lowercase: true,
    trim: true,
    index: {
      unique: true
    }
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 5
  },
  role: {
    type: Number,
    default: 0
  },
  profilePic: {
    type: String,
    default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  },
  token: {
    type: String
  },
  tokenExp: {
    type: String
  }
}, 
  {timestamps: true}
);

// Executing function before "save" function
UserSchema.pre('save', function(next){
  const user = this;

  if(user.isModified('password')) { // Password가 변경될 때만...

    // Encoding Password
    bcrypt.genSalt(saltRounds, function(err, saltedPassword){
      if(err) return next(err);

      // Generating hash password
      bcrypt.hash(user.password, saltedPassword, function(err, hashedPassword){
        if(err) return next(err);
        
        user.password = hashedPassword;
        
        next();
      });
    });
  } else { // Password가 아니 다른 field를 변경 시키면 여리로..    
    next();
  }
});

// Camparing entered Password to original Password
UserSchema.methods.isPasswordMatched = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generating Token
UserSchema.methods.generateToken = function(callback) {
  const user = this;

  // jwt를 이용해서 token을 생성
  var generatedToken = jwt.sign(user._id.toHexString(), config.JwtSecret);

  user.token = generatedToken;
  user.save(function(err, user) {
    if(err) return callback(err);
    callback(null, user);
  });
};

// 
UserSchema.statics.findByToken = function(token, cb) {
  const user = this;

  // Decoding token
  jwt.verify(token, config.JwtSecret, function(err, decodedToken) {
    if(err) return cb(err);

    user.findOne({ "_id": decodedToken, "token": token }, function(err, user) {
      if(err) return cb(err);
      cb(null, user);
    });
  });
};


const User = mongoose.model('User', UserSchema);

module.exports =  User;