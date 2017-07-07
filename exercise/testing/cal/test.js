var chai = require("chai");
var assert = chai.assert;

////import code
//var cal = require("../app.js")

describe("A calculator",
	function () {
		it("should return sum of two numbers", function () {
			assert.equal(add(1, 1), 2);
			assert.equal(add(2, 2), 4);
		});
		it("should return the differens of two numbers", function () {
			assert.equal(cal.sum(2, 2), 0);
			assert.equal(cal.sum(-2, 1), -3);
		});

	});
