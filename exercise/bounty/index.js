var express = require("express");
const uuidv4 = require('uuid/v4');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());


var bounties = [
//	{
//		'firstName': 'John',
//		'lastName': 'Brown',
//		'living': true,
//		'bountyAmount': 1000,
//		'type': 'jedi'
//
//	},
//	{
//		'firstName': 'Rob',
//		'lastName': 'Gray',
//		'living': true,
//		'bountyAmount': 300,
//		'type': 'jedi'
//
//	},
//	{
//		'firstName': 'Phil',
//		'lastName': 'Smith',
//		'living': true,
//		'bountyAmount': 2000,
//		'type': 'jedi'
//
//	}
]
app.get('/', function (req, res) {
	res.send("Hello world!");
});

app.get("/bounty", function (req, res) {

	res.send(bounties);
});
//post request
//adding a new bounty to the database
app.post("/bounty", function (req, res) {
	//executed when the request endpoint is bounty
	//we assign the body a new id
	req.body.id = uuidv4();
	//once it is assigned, add it to the database
	bounties.push(req.body);
	//send the message back that it was successful
	res.send("It worked");
});

//delite bounty
//deliting old bounty from our db
app.delete("/bounty/:id", function (req, res) { //executrd when we find the exect id we want to delite
	for (var i = 0; i < bounties.length; i++) {
		if (bounties[i].id == req.params.id) { //found id and now we are ready to delite by using slice method
			bounties.splice(i, 1); //and after we delite we are sending resof wha we did delite
			res.send(bounties[i]);
			return // and we are retirning and finishing with our function
		}
	}
	res.send("can not find it");
	return

});

app.put("/bounty/:id", function (req, res) {
	for (var i = 0; i < bounties.length; i++) {
		if (bounties[i].id == req.params.id) {
			req.body.id = req.params.id;
			bounties[i] = req.body;
			res.send(req.body);
			return
		}
	}
	res.send("can not find it");

});

app.listen(8080, function () {
	console.log("Server is running on port 8080");
});
