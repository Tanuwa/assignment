var express = require("express");
var vegetableRoutes = express.Router();

vegetableRoutes.get("/", function (req, res) {
	res.send("Here's some veggies!");
});

vegetableRoutes.post("/", function (req, res) {

});

vegetableRoutes.get("/:id", function (req, res) {

});

vegetableRoutes.put("/:id", function (req, res) {

});

vegetableRoutes.delete("/:id", function (req, res) {

});

module.exports = vegetableRoutes;
