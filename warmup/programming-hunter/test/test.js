let chai = require("chai");
let assert = chai.assert;

//import code;

let matchingWords = require("../index.js");

describe("Test Matching Words", function () {
	it('should return an array of repeated words', function () {
		assert.deepEqual(matchingWords("hello hello there"), ["hello"]);
		assert.deepEqual(matchingWords("allen allen jacob jacob"), ["allen", "jacob"]);
		assert.deepEqual(matchingWords("hello it is me you looking for hello again"), ["hello", "me"]);


	});
	it("should return an empty array no words", function () {
		assert.deepEqual(matchingWords("hello I do not"), [])

	});
});
