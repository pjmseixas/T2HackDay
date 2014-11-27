/**
 * New node file
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var rewardsSchema = new Schema({
	user: {
		    type: Schema.ObjectId,
		    ref: 'users'
		  },
	rewardUsed : Number 
}
);

var Rewards  =  mongoose.model('rewards', rewardsSchema);

exports.Rewards = mongoose.model('rewards');
