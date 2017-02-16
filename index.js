/*var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/');*/

var express = require('express');
var app = require('express')();

app.set('port', (process.env.PORT));
app.use(express.static(__dirname + '/dist'));
app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/');

app.get('/', function(request, response) {
	response.render('index.html');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});