var express = require('express');
//var decorFunc = require('./decorate');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var port = process.env.PORT || 8000;
//app.use(decorFunc);
//app.get("/", function (req, res) {
//	res.send({
//		"name": "some Object",
//		"value": 1000
//	})
//})

var something = [
	{
		color: 'green',
		size: 'small'
	},
	{
		color: 'yellow',
		size: 'midium'
	},

	{
		color: 'blue',
		size: 'large'
	}
];

app.get('/somethings', function (req, res) {
	res.send(something);
});

app.listen(port, function () {
	console.log("Intercepted app server is running" + port);
});
