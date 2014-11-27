
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/index')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , fs = require('fs');


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'hjs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  // Connect to mongoDB
  mongoose.connect('mongodb://127.0.0.1/T2HackDay');
}

console.log(__dirname);
var models_path = __dirname + '/models';

fs.readdirSync(models_path).forEach(function (file) {
  if (~file.indexOf('.js')) require(models_path + '/' + file)
})

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/addToken', user.addToken);
app.get('/getByMSISDN', user.getByMSISDN);
//app.post('/users/:msisdn', user.addTokens)


//more than one parameter on the req
//app.get('/fruit/:fruitName/:fruitColor', function(req, res) {
//    var data = {
//        "fruit": {
//            "apple": req.params.fruitName,
//            "color": req.params.fruitColor
//        }
//    }; 
//
//    send.json(data);
//});





// get specific userID
//app.get('/posts/:userId', function(req, res) {
//	  mongoose.model('posts').find({user: req.params.userId}, function(err, posts) {
//	    mongoose.model('posts').populate(posts, {path: 'user'}, function(err, posts) {
//	      res.send(posts);
//	    });
//	  });
//	});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
