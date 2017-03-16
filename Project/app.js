var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config.json');

app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));


var mongoose = require('mongoose');

//mongoose.createConnection(config.connectionString);

Seller = require('./models/Student');

Order = require('./models/Orders');

mongoose.connect(config.connectionString);

app.get('/student/', function(req,res){
	Seller.getSeller(function(err,seller){
		if(err){
			throw err;
		}
		res.json(seller);
	});
});

app.get('/student/:_id', function(req,res){
	Seller.getSellerById(req.params._id, function(err,seller){
		if(err){
			throw err;
		}
		res.json(seller);
	});
});

app.post('/student/', function(req,res){
	var seller = req.body;
	Seller.addSeller(seller, function(err,seller){
		if(err){
			throw err;
		}
		res.json(seller);
	});
});

app.put('/student/:_id', function(req,res){
	var seller = req.body;
	var id = req.params._id;
	Seller.updateSeller(id, seller, function(err,seller){
		if(err){
			throw err;
		}
		res.json(seller);
	});
});

app.delete('/student/:_id', function(req,res){
	var id = req.params._id;
	Seller.deleteSeller(id, function(err,seller){
		if(err){
			throw err;
		}
		res.json(seller);
	});
});

//2nd one

app.get('/orders/', function(req,res){
	Order.getOrder(function(err,order){
		if(err){
			throw err;
		}
		res.json(order);
	});
});

app.get('/orders/:_id', function(req,res){
	Order.getOrderById(req.params._id, function(err,order){
		if(err){
			throw err;
		}
		res.json(order);
	});
});

app.post('/orders/', function(req,res){
	var order = req.body;
	Order.addOrder(order, function(err,order){
		if(err){
			throw err;
		}
		res.json(order);
	});
});

app.put('/orders/:_id', function(req,res){
	var order = req.body;
	var id = req.params._id;
	Order.updateOrder(id, order, function(err,order){
		if(err){
			throw err;
		}
		res.json(order);
	});
});

//2nd ends



var server = app.listen('8080', function(){
	console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
