const app = require('./app');

// Set up the environment variables
const dotenv = require('dotenv');
dotenv.config();

/* Listening Port */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});