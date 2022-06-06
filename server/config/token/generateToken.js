const jwt = require("jsonwebtoken");
const config = require('../config');

const generateToken = id => {
  return jwt.sign({id}, config.JwtSecret, {expiresIn: '2d'});
}

module.exports = generateToken;