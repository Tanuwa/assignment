/// 1.we are going to grab last index and
//2.return my last index
//grab one before las one 
//return after second index on right side



//function reversingString(myString) {
//    var newReverseString = "";
//    for (var i = myString.length - 1; i >= 0; i--) {
//        newReverseString += myString[i];
//    }
//    console.log(newReverseString);
//    return;
//}
//
//reversingString("Hello");



//give an array of numbers and one integer. get a function that will return true or false depending if integer is iside of that array.

//use: one for loop
//if else statement

//pseudo code like what we did earlier the entire process, and then implement it with code

//example: 


//we are going to search our array starting from index 0
//looking for 6
//if there no 6 return false
//if there 6 return true
var array = [1, 2, 3, 4, 5];
var integer = 6;

//our function will return false

function findNumber(array, integer) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === integer) {
            return true;
        }


    }
    return false;

}
console.log(findNumber([2, 4, 7, 6], 6));
