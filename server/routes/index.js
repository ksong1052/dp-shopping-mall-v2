const express = require('express');
const router = express.Router();

const userRoute = require('../routes/userRoute');

// Route matches /api/users
router.use('/users', userRoute);



module.exports = router;