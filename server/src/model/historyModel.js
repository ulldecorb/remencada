const mongoose = require('mongoose');

const historySchemma = mongoose.Schema({
  title: String,
  description: String
});

module.exports = mongoose.model('History', historySchemma);
