// Given a string, return true if the first instance of 'x' in the string is
// immediately followed by another 'x'.



let chai = require("chai");
let assert = chai.assert;



//import my code
let doubleX = require("..app.js");
describe("Testing doublex", () => {
	it("should return true if firs x is following by x", () => {
		assert.equal(doubleX("xx"), true);
		assert.equal(doubleX("exxtra"), true);
	});

	it("should return false if the first x is not followe")
})
