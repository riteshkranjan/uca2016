var mongoose = require('mongoose');
var studentSchema = mongoose.Schema({
	name:{
		type: String,
		retuired: true
	},
	age:{

	}
});
var Student = module.exports = mongoose.model('college', studentSchema, 'students');

module.exports.getStudent = function(callback, limit){
	Student.find(callback).limit(limit);
}

module.exports.getStudentById = function(id , callback){
	Student.findById(id, callback);
}

module.exports.addStudent = function(student, callback){
	Student.create(student, callback);
}

module.exports.updateStudent = function(id, student, callback){
	var query = {_id: id};
	var update = {
		name: student.name
	};
	Student.findOneAndUpdate(query, update, callback);
	// Student.findById(id, callback);
}

module.exports.deleteStudent = function(id, callback){
	var query = {_id: id};
	Student.remove(query, callback);
}
