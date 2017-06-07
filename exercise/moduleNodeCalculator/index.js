var add = require("./add");
var multiply = require("./multiply");
var divide = require("./div");
var substract = require("./substract");
var rs = require('readline-sync');


var num1 = rs.questionInt('Enter the first number: ');
var num2 = rs.questionInt('Enter the second number: ');
var operand = rs.question("Please enter an operand ( *, +, - or /): ");
var result;
switch (operand) {
	case "*":
		result = multiply(num1, num2);
		break;

	case "+":
		result = add(num1, num2);
		break;

	case "-":
		result = substract(num1, num2);
		break;

	case "/":
		result = divide(num1, num2);
		break;
}
console.log(num1 + operand + num2 + "=" + result);
