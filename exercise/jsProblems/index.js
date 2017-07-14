// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 
   
   
//   function sumTriple (int1, int2) {
//   if (int1 == int2) {
//     return 3 * (int1 + int2);
//     } 
//   else
//   {
//     return (int1 + int2);
//   }
// }
// sumTriple(3,3);
 
 
// Given an array of strings, find the 3 adjacent elements with the longest combined length. Return them in the form of an array.

// Example:

// For inputArray = ["this", "is, "an", "array], the output of combined(inputArray) should return ["is", "an", "array"] because they have the longest combined length of any 3 adjacent elements.


 
// let adString = (arr) => {
//     let biggest = 0;
//     let index = 0;
//     let newArr = [];
//     if(arr.length < 3){
//         throw "Array is too small";
//     }else if(arr.length === 3){
//         return arr;
//     }
//     for(let i = 0; i <= arr.length - 3; i++){
//         let temp = arr[i].length + arr[i + 1].length + arr[i + 2].length;
//         if(temp > biggest){
//             biggest = temp;
//             index = i;
//         }
//     }
//     newArr.push(arr[index], arr[index + 1], arr[index + 2]);



// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. 
    
    
    // function if50(num1,num2){
    //   if(num1===50||num2===50||num1+num2===50){
    //     return true
    //   }
    // else{return false}
    //   }
    // if50(25,3);
    