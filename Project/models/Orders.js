var mongoose = require('mongoose');

var OrderSchema = mongoose.Schema({
	username:{
		type:String
	},
	name:{
		type:String
	},
	price:{
		type:Number
	},
	address:{
		type:String
	},
	status:{
		type:String,
		default:"Accepted"
	}
});



var Order = module.exports = mongoose.model('placedOrders', OrderSchema, 'Orderdb');


module.exports.getOrder = function(callback, limit){
	Order.find(callback).limit(limit);
}

module.exports.getOrderById = function(id , callback){
	Order.findById(id, callback);
}

module.exports.addOrder = function(data, callback){
	Order.create(data, callback);
}

module.exports.updateOrder = function(id, order, callback){
	var query = {_id: id};
	var update = {
		name:order.name,
		status: order.status
	};
	Order.findOneAndUpdate(query, update, callback);
	
}

