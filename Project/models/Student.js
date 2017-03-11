var mongoose = require('mongoose');
var sellerSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	price:{
		type: Number

	},
	file:{
		type: String
	}

});
var Seller = module.exports = mongoose.model('flowers', sellerSchema, 'seller');

module.exports.getSeller = function(callback, limit){
	Seller.find(callback).limit(limit);
}

module.exports.getSellerById = function(id , callback){
	Seller.findById(id, callback);
}

module.exports.addSeller = function(seller, callback){
	Seller.create(seller, callback);
}

module.exports.updateSeller = function(id, seller, callback){
	var query = {_id: id};
	var update = {
		name: seller.name
	};
	Seller.findOneAndUpdate(query, update, callback);
	
}

module.exports.deleteSeller = function(id, callback){
	var query = {_id: id};
	Seller.remove(query, callback);
}
