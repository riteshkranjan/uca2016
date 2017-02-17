var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config.json');
app.use(bodyParser.json());
app.use(express.static(__dirname + "/client"));


var mongoose = require('mongoose');
mongoose.connect(config.connectionString);

Student = require('./models/Student');

app.get('/',function(req, res){
	res.send('hello world!! my db path =  '+config.connectionString );
});

app.get('/student/', function(req,res){
	Student.getStudent(function(err,student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.get('/student/:_id', function(req,res){
	Student.getStudentById(req.params._id, function(err,student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.post('/student/', function(req,res){
	var student = req.body;
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
	Student.updateStudent(id, student, function(err,student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

app.delete('/student/:_id', function(req,res){
	var id = req.params._id;
	Student.deleteStudent(id, function(err,student){
		if(err){
			throw err;
		}
		res.json(student);
	});
});

var server = app.listen('8080', function(){
	console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
