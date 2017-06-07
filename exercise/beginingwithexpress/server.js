var express = require("express");
var app = express();
var bodyParser = require('body-parser');



app.use(bodyParser.json());

var bounties = [
	{
		firstname: 'John',
		lastname: 'Smith',
		living: 'true',
		amount: 7;
	}
]

app.get("/", function (req, res) {
	res.send(bounties);
})

app.post('/', function (req, res) {
	var newBounty = req.body;
	bounties.push(newBounty);
	res.send(bounties);
})



app.listen(8000, function () {
	console.log("App is listening on port 8000!");
});
