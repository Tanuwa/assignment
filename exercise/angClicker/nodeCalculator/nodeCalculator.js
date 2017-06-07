var calculator = require('readline-sync');


var num1 = calculator.questionInt('Enter the first number: ');
var num2 = calculator.questionInt('Enter the second number: ');
var option = calculator.question("Please enter an option ( *, +, - or /): ");
var result;
switch (option) {
	case "*":
		result = (num1 * num2);
		break;

	case "+":
		result = (num1 + num2);
		break;

	case "-":
		result = (num1 - num2);
		break;

	case "/":
		result = (num1 / num2);
		break;
}
console.log(num1 + option + num2 + "=" + result);
