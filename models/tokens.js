/**
 * New node file
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tokensSchema = new Schema({
	token : String,
	billingid : String
	}
);

var Tokens  =  mongoose.model('tokens', tokensSchema);
exports.Tokens = mongoose.model('tokens');
