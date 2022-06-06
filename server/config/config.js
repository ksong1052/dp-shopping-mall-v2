const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  db: {
    mongodbURI: process.env.MONGODB_URI
  },
  JwtSecret: process.env.JWT_SECRET
}