// initializing express application & all of its contents
var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

// sets up handlebars & app port
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 9368);

// sets up form to parse URL encoded forms & JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET request
app.get('/get', function(req,res) {
	var getParams = [];

	for (var p in req.query) {
		getParams.push({"name": p, "value": req.query[p]});
	}

	var context = {};
	context.getList = getParams;
	res.render('get', context);
});

// POST request
app.post('/post', function(req,res) {
	var postQParams = [];
	for (var p in req.query) {
		postQParams.push({'name': p, 'value': req.query[p]});
	}

	var postBParams = [];
	for (var b in req.body) {
		postBParams.push({'name': b, 'value': req.body[b]});
	}

	var context = {};
	context.postQList = postQParams;
	context.postBList = postBParams;
	res.render('post', context);
});

// 404 error 
app.use(function(req, res){
	res.status(404);
	res.render('404');
});

// 500 error
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

// console log for started app
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});