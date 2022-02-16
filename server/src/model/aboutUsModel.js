const mongoose = require('mongoose');

const aboutUsSchemma = mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('AboutUs', aboutUsSchemma);
