var express = require("express");
var authRoutes = express.Router();
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var config = require("../config");

authRoutes.post("/signup", function (req, res) {
	User.findOne({
		email: req.body.email
	}, function (err, existingUser) {
		if (err) return res.status(500).send(err);
		if (existingUser) {
			return res.status(403).send({
				success: false,
				message: "That email is already taken"
			})
		}
		var newUser = new User(req.body);
		newUser.save(function (err, userObj) {
			if (err) return res.status(500).send(err);
			return res.send(userObj);
		});
	});
});

authRoutes.post("/login", function (req, res) {
	User.findOne({
		email: req.body.email
	}, function (err, existingUser) {
		if (err) return res.status(500).send(err);
		if (!existingUser || existingUser.password !== req.body.password) {
			return res.status(401).send({
				success: false,
				message: "That email is incorect"
			});
		}

		var token = jwt.sign(existingUser.toObject(), config.secret);
		return res.send({
			token: token,
			user: existingUser.toObject(),
			success: true,
			message: "Enjoy your token"
		});
	});
});


module.exports = authRoutes;
