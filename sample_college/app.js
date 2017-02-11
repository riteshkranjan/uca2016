var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('config.json');

app.use(bodyParser.json());

Student = require('./models/Student');
mongoose.connect(config.connectionString);
//var db = mongoose.connection;
 
app.get('/',function(req, res){
	res.send('hello world db path =  '+config.connectionString+ ' ' );

});

app.get('/student/', function(req,res){
	console.log("in here");
	Student.getStudent(function(err,student){
		if(err){
			throw err;
		}
		console.log("in  too");
		res.json(student);  
	});
});

app.get('/student/:_id', function(req,res){
	console.log("in here");
	Student.getStudentById(req.params._id, function(err,student){
		if(err){
			throw err;
		}
		console.log(student);
		res.json(student);  
	});
});

app.post('/student/', function(req,res){
	var student = req.body;
	console.log(student);
	Student.addStudent(student, function(err,student){
		if(err){
			throw err;
		}
		res.json(student);  
	});
});

app.put('/student/:_id', function(req,res){
	var student = req.body;
	var id = req.params._id;
	console.log(student);
	console.log(id);
	Student.updateStudent(id, student, function(err,student){
		if(err){
			throw err;
		}
		res.json(student);  
	});
});

app.delete('/student/:_id', function(req,res){
	var id = req.params._id;
	console.log(id);
	Student.deleteStudent(id, function(err,student){
		if(err){
			throw err;
		}
		res.json(student);  
	});
});

var server = app.listen('9090', function(){
	//console.log('running on port 9090 now');
	console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
