/*var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/dist'));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/');*/

var express = require('express');
var app = require('express')();

app.set('port', (process.env.PORT));

/* Serve static compiled files */
app.use(express.static(__dirname + '/dist'));

/* Serve static *.html component files */
app.use(express.static(__dirname + '/app/eton'));
app.use(express.static(__dirname + '/app/assets'));
app.use(express.static(__dirname + '/mocked_api/'));

app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/');

app.get('/', function(request, response) {
	response.render('index.html');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});