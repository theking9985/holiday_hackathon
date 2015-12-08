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


var Guest = require('./models/guests');

// create a new user called Chris
var chris = new Guest({
  name: 'Chris',
  nickname: 'Reindeer'
});

app.get('/', function(req, res) {
  res.send(chris);
});


// app.get('/', function(req, res) {
//   res.send('Hi!');
// });


app.listen(3000);

