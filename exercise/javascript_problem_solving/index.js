//Given a string, return a new string where the first and last chars
// have been exchanged.

// var frontBack=function(str) {
// var newStr=str.split("");

// var firstelem=newStr[0];
// newStr.push(firstelem);
// newStr.splice(0,1);

// var lasstep=newStr[newStr.length-2]
// newStr.unshift(lasstep);
// newStr.splice(newStr.length-2,1);

// var finaly=newStr.join("");
// console.log(finaly);
// };

// frontBack("crazy");


// dif way to solve it
// function frontBack(str){
//   var first = str[0];
//   var last = str[str.length-1];
//   var middle = str.substring(1, str.length-1);
//   var output = last + middle + first;
//   return output;
// }

// console.log(frontBack("school"));




// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.
//   function sumDouble (a,b) {
//   var sum =a+b;
//   //console.log(sum);
//   var doub=sum+sum;
// //console.log(doub);
 
// if(a===b)
// {return doub}
// // console.log(doub);
// else return sum
// }
 
//   sumDouble(2,3);







// Return true if the given non-negative number is a multiple of 3
// or a multiple of 5. (Hint: Use the % ‘mod’ operator)

// function checkNum(n) {
  
// if ((n % 3 === 0) || (n % 5 === 0))
// {return true}
// else return false

// }
  
//   checkNum(10);
  
  
  
  
  
//   //given a string, write a function that returns true if it contains at least 3 vowels and false if not
// function hasThreeVowels(str){
  
  
//   for (var i = 0; i <= str.length - 1; i++) {

 
//     if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
//   return true;
//     }
    
// // return false;
// }
// return false;
// }
 
// hasThreeVowels("Tprsk");






// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.

// "()()()()" // -> true "(((())))" // -> true "()))))" // -> false

// Also, every closing parentheses needs an opening partner before it.

// ")()()(" // -> false "())(" // -> false


// function myFunk(str){
//   var storage=0;
//   for(var i=0; i<str.length; i++){
    
//     if(str[i]) ==="("){
//       storage++;
//     } else if (str[i]===")"){
//       storage --;
//       if(storage<0){
//         return false;
//       }
//     }
//     }
//     return storage===0;
//   }



// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.

// sleep_in(False, False) → True
// sleep_in(True, False) → False
// sleep_in(False, True) → True

// We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return True if we are in trouble.

// monkey_trouble(True, True) → True
// monkey_trouble(False, False) → True
// monkey_trouble(True, False) → False

// function monkey_trouble(a_smile,b_smile){
//   return (a_smile===b_smile)
// }
// monkey_trouble(false,false);




// Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

// diff21(19) → 2
// diff21(10) → 11
// diff21(21) → 0 


//function diff(n){
//   var absdif=21-n;
//   //console.log(absdif);
//   var dubl= (n-21)*2;
//   //console.log(dubl);
  
//   if(n>21){
//   return dubl}
// else return absdif;


//}
//diff(29);




// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return True if we are in trouble.

// parrot_trouble(True, 6) → True
// parrot_trouble(True, 7) → False
// parrot_trouble(False, 6) → False

function parrot_trouble(talking,hour){
  
  if(talking&&hour<7||hour>20){
    return true
  }
  else {
    return false;
    
  }
  
  
  
}
parrot_trouble(false,9);