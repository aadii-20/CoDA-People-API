// .models/database.js
const mongoose = require("mongoose");

const scholarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  researchArea: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
  }
});

const Scholar = mongoose.model('Scholar',scholarSchema);
module.exports = Scholar;