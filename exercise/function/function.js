//Write a function that accepts two numbers as parameters, and returns the sum.
function myFunction(a, b) {
    var sum = a + b;
    return (sum)
}
myFunction(2, 3);



//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

function myFunc(num1, num2, num3) {
    var max = Math.max(num1, num2, num3);
    return max;
}

myFunc(2, 3, 5);




//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function myFunc(number) {

    if (number % 2 === 0) {
        console.log('is even');

    } else {
        console.log('is odd');
    }
}

myFunc(2);




//Write a function that accepts a string as a parameter. If the length of the //string is less than or equal to twenty characters long, return the string //concatenated with itself (string + string). If the string is more than twenty //characters long, return the first half of the string.

function myCalculation(myString){
  if (myString.length <= 20) {
        return myString + myString;
    }  else {
        return myString.substring(0, myString()/2);
    }

    
}
myCalculation('Hello Hello Hello');



