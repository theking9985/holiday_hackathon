var mongoose = require('mongoose');

// create a schema
var guestSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  created_at: Date,
  updated_at: Date
});

var Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;