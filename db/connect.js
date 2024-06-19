// .db/connect.js
const mongoose = require('mongoose');

const connectDB = (uri) => {
    console.log('connect db'); // Add a log to confirm function call
    return mongoose.connect(uri);
};

module.exports = connectDB;
