const mongoose = require('mongoose');
const { db } = require('../config/config');

// 1.
// mongoose.connect(db.mongodbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(console.log('MongoDB Connection Successfully'))
// .catch((err) => console.log('Error in MongoDB connection: '+JSON.stringify(err, undefined, 2)))

// 2. 
const dbConnect = async () => {
  try {
    await mongoose.connect(
      db.mongodbURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log('DB is connected successfully');
  } catch (error) {
    console.log(`Error in MongoDB Connection: ${error.message}`);
  }
}

module.exports = dbConnect;
