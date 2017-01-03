var express = require("express");
var app = express();
app.set('view engine', 'pug');
var port = process.env.PORT || 3000;
var argv = require('yargs').argv;

// some generic defaults
var name = "this application";
var duration = "around 30 minutes";

// accept args
if(argv.name) name = argv.name;
if(argv.duration) duration = argv.duration;

app.listen(port, function(err){
	console.log("running server on port "+ port);
});

app.get("/", function(req, res){
	res.render('index', {
		name: name,
		duration: duration
	})
});