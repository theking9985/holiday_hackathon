var mongoose = require("mongoose");

var partySchema = new mongoose.Schema({
 name: String,
 meta: {
   guest: Array,
   item: Array,
 },
 created_at: Date,
 updated_at: Date
});

var Party = mongoose.model('Party', partySchema);

module.exports = Party;