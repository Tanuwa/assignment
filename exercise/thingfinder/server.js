var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;



var fruits = [
	{
		type: "banana",
		size: "lg",
		quantity: 5
	},
	{
		type: "orange",
		size: "small",
		quantity: 5
	},

	{
		type: "apple",
		size: "small",
		quantity: 7
	}
];
app.get('/fruits/:type', function (req, res) {
	//	res.send(fruits);
	for (var i = 0; i < fruits.length; i++) {

		if (fruits[i].type === req.params.type) {
			return res.send(fruits[i]);
		}
	}
	res.status(404).send({
		message: "Not Found"
	});
});

app.get("/fruits", function (req, res) {

	var query = {};
	var filteredFruits = [];

	console.log(Object.keys(req.query).length)

	if (req.query.size) {
		query.size = req.query.size;
	}
	if (Object.keys(req.query).length > 0) {
		for (var i = 0; i < fruits.length; i++) {
			if (fruits[i].size === req.query.size) {
				filteredFruits.push(fruits[i]);
			}
		}
		return res.send(filteredFruits);
	}


	res.send(animals);

});
//			if (req.query) {
//				var filteredfruit = fruits.filter(function (fruits) {
//					return fruits.type =
//
//				});
//				return res.send(fruits);
//			} else {
//				return type was not find
//			}
//		};



app.listen(port, function () {
	console.log("Intercepted app server is running" + port);
});
