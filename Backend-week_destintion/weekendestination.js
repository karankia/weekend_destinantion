var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to Mongoose
mongoose.Connect('mongodb://localhost/weekend_destination');
var db = mongoose.connection;

app.get('/', function(reg, res){
	res.send('Hello World!');
});

app.listen(3000);
console.log('Running pn port 3000');
