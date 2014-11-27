/**
 * New node file
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  name: String,
  msisdn: String,
  rewardUsed: Number,
  tokens: [{
	    type: Schema.ObjectId,
	    ref: 'tokens'
	  }]
});

//var rewardsSchema = new Schema({
//	
//}
//		)

var Users  =  mongoose.model('users', usersSchema);

exports.Users = mongoose.model('users');
