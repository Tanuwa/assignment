//Create a function that takes two arrays and returns an array of the items that are unique.
//
//Given two arrays (for example array A = [1, 2, 3] and array B = [2, 3, 4]), find the set of elements which are in one of the two arrays, but not in both.
//
//The function should return an array of all the unique items. From the example above, it would return [1, 4], not necessarily in that order. (Order is unimportant).
//
//Extra Credit: If you complete the problem above, refactor your solution so that the function can accept any number of arrays, or an array of arrays, rather than just two.


Symmetric Difference is the difference between two sets.

So in the Symmetric Difference Bonfire you would work through the arrays of numbers something like this -

	sym(A, B, C) Translates to sym(sym(A, B), C)

Or in plain English - First find the Symmetric Difference of Set A and Set B.Then find the Symmetric Difference of this new set and Set C.

So -

	sym([1, 2, 5], [2, 3, 5], [3, 4, 5])

would equal

	[1, 4, 5]

Here 's a nice video tutorial (with an awful fake British accent!) 


var getDiff = function (firstarr, secondarr) {
		function checkingFunc(first, second)



		//first exm

		//	function diffArray(firstarr, secondarr) {
		//   var newArray = [];
		//
		//   function notInArray2(value){
		//       return secondarr.indexOf(value) === -1;
		//   }
		//   function notInArray1(value){
		//     return firstarr.indexOf(value) === -1;
		//   }
		//
		//   var arr1Filtered = firstarr.filter(notInArray2);
		//   var arr2Filtered = secondarr.filter(notInArray1);
		//
		//   newArray = arr1Filtered.concat(arr2Filtered);
		//   return newArray;
		//}





		//sec exm

		//	var difference = function (arr) {
		//    var ret = [];
		//    for (arrIndex = 0; arrIndex < arr.length; arrIndex++) {
		//        var firstArray = arr[arrIndex];
		//        for (var i = 0; i < firstArray.length; i++) {
		//            for (var secondArrIndex = 0; secondArrIndex < arr.length; secondArrIndex++) {
		//                var secondArray = arr[secondArrIndex];
		//                var val = firstArray[i];
		//                if (secondArray.indexOf(val) == -1 && ret.indexOf(val) == -1) {
		//                    ret.push(val);
		//                }
		//            }
		//        }
		//    }
		//    return ret;
		//}
		//
		//console.log(difference([[1, 2, 3, 6], [2, 3, 4, 5]])); // returns [1,6,4,5]
