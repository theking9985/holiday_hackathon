var mongoose = require("mongoose");

var partySchema = new mongoose.Schema({
 name: String,
   guest1: String,
   guest2: String,
   guest3: String,
   guest4: String,
   guest5: String,
   guest6: String,
   guest7: String,
   guest8: String,
   guest9: String,
   guest10: String,
   item1: String,
   item2: String,
   item3: String,
   item4: String,
   item5: String,
   item6: String,
   item7: String,
   item8: String,
   item9: String,
   item10: String,
 
 created_at: Date,
 updated_at: Date
});

var Party = mongoose.model('Party', partySchema);

module.exports = Party;