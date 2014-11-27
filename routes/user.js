
/*
 * GET users listing.
 */

var mongoose = require('mongoose');
var UsersModule = require('../models/users');
var RewardsModule = require('../models/rewards');
var TokensModule = require('../models/tokens');
var http = require('http');

exports.list = function(req, res){
  mongoose.model('users').find(function(err, users) {
    res.send(users);
  });
};

exports.add = function(req,res){
	new UsersModule.Users({
		name : req.params.name,
		msisdn : req.params.msisdn
		}).save(function ( err, data ){
			if( err ) {
				console.log("ERRO");
				return next( err );
			}
		});
};

exports.addToken = function(req, res){
	UsersModule.Users.find({msisdn: req.param('msisdn')}, function(err, user) {
//		var token ={
//			token : "10", //req.params.token,
//			billingid : "12" //req.params.billingid
//			};
//		
		var token =
		new TokensModule.Tokens({
			token : "10",
			billingid : "12"
			}).save(function ( err, data ){
				if( err ) {
					console.log("ERRO");
					return next( err );
				}else console.log("SUCCESSSSSSSSS");
			});
		
		console.log(user);
		console.log("token:" + token);
//		user[0].tokens.push(token);
//		
//		user.save(function ( err, data ){
//			if( err ) {
//				console.log("ERRO");
//				return next( err );
//			}});
//		
	});
	
//	var token 
//	new TokensModule.Tokens({
//		user : 
//		token : req.params.token,
//		billingid : req.params.billingid
//		}).save(function ( err, data ){
//			if( err ) {
//				console.log("ERRO");
//				return next( err );
//			}
//		});
	
}

exports.getByMSISDN = function(req,res){
	
	
	UsersModule.Users.find({msisdn: req.param('msisdn')}, function(err, data) {
//		res.send(data);
		res.render('getByMSISDN', data[0]);
	  });
	
	 
	
//	UsersModule.Users.find({msisdn: req.param('msisdn')}, function(err, tokens) {
//		mongoose.model('tokens').populate(tokens, {path: 'user'}, function(err, tokens) { 
//	    });
//		res.send(tokens);
//	  });
//	
};		  

//function name(req,res){
//	new UsersModule.Users({
//			name : req.params.name,
//			msisdn : req.params.msisdn
//			}).save(function ( err, data ){
//				if( err ) {
//					console.log("ERRO");
//					return next( err );
//				}
//			});
//};
		  


//res.send("respond with a resource");
//console.log(req);

//for(var i =0, l = users.length; i<l ; i++){
//if(users[i].name = 'Hasnain') {
//	  res.send(users[i].name);
//}
//}


//exports.add = function(req,res){
//	mongoose.model('users').insert({name: 'ola'});
//	res.send("OK");
//};
