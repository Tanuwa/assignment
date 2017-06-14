//* Given an array of integers, return an array containing the doubles
//* of each of the original integers.
//*
//* E.g. doubles([1, 2, 3, 4, 5])  => [2, 4, 6, 8, 10]
//function doubles(arr) {
//	var doub = arr.map(function (item) {
//		return item * 2
//	});
//	console.log(doubles);
//}
//doubles([1, 2, 3, 4, 5]);
//


/*
 * Given an array of integers, return an array on integers
 * containing the mirrored image of those integers
 *
 * E.g. mirrored([9, 13, 14, 42]) => [99, 1331, 1441, 4224]
 * */
// function mirrored(arr) {
//	var almostThesame = arr.map(function (item) {
//		var string = item.toString();
//		return parseInt(item + string.split("").reverse().join(""))
//
//	});
//
//	console.log(almostThesame);
//
//};
//mirrored([22, 3, 54, 7, 8]);



/*
 * Given an array of squared numbers, return an array of the
 * square roots of those numbers
 *
 * E.g. roots([4, 9, 16, 25, 36]) => [2, 3, 4, 5, 6]
 * */

//function roots(arr) {
//	var getsqrt = arr.map(function (item) {
//		return Math.sqrt(item)
//	});
//	console.log(getsqrt);
//}
//roots([4, 9, 16, 25, 36]);



