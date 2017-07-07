var assert = function (actual, expected) {
	if (expected != actual) {
		throw {
			actual: actual,
			expected: expected
		};
	} else {
		console.log("Sucess", {
			actual: actual,
			expected: expected
		});
	}
};
var describe = function (message, testFunc) {
		try {
			testFunc();
		} catch (err) {
			console.log("Test group failed", err);


		};
		var add = function (a, b) {
			return a + b;
		};
		var add = function (a, b) {
			return a - b;

		};
		var add = function (a, b) {
			return a * b;

		};
		var add = function (a, b) {
			return a * b;

		};
		var add = function (a, b) {
			return a / b;

		};

		describe("Test calculator", function () {
			assert(add(2, 3) 5);
			assert(sub(2, 3), 1);
			assert(mul(2, 3), 6);
			assert(div(2, 3) 4);
		});
