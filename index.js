var express = require('express');
var bodyParser = require('body-parser');
// A package to help manipulate paths
// More info: https://docs.nodejitsu.com/articles/file-system/how-to-use-the-path-module
var path = require('path');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/holidayDB');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/party', require('./controllers/party'));

var Party = require('./models/party');

// create a new user called Chris
var xmas = new Party({
  name: 'Taylor party',
  meta: {
  	guest: ["Tess", "Taylor"],
  	item: ["cheese", "taco"]
  
  }
});

app.get('/', function(req, res) {
  res.send(xmas);
});


// app.get('/', function(req, res) {
//   res.send('Hi!');
// });


app.listen(3000);

