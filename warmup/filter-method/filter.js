var arr = [1, 2, 3, 4, 5];
var filtered = arr.filter(function (element, index, array) {
	return (index % 2 === 0);
});



/*Array.prototype.filter(); this means every array has access to this function
-higher order function which means - functions that take another function as a parameter
(callback)

possible 3 - last 2 are optional parameters in function (num, index, arr)
//filter function returns true or false
it autmatically creats a new array - if something is true it will add it to the new array
if false it does not add it to the aray

*/


// function evens(nums){
//     var evens = nums.filter(function(item){
//         return item % 2 === 0;
//     });
//     console.log(evens);
//     return evens;
// }
//
// evens([1,2,3,4,5]);

/*
 * Given an array of integers, return an array that
 * only includes the odds from the original array.
 * You must use Array.prototype.filter
 *
 * E.g. odds([1, 2, 3, 4, 5])  => [1, 3, 5]
 * */

//
// function odds(nums) {
//     var odds = nums.filter(function(item){
//        return item % 2 !== 0;
//     });
//     console.log(odds);
//     return odds;
// }
//
// odds([1, 2, 3, 4, 5]);

// function drinkingAge(people){
//     var oldEnough = people.filter(function(person){
//         return person.age >= 21;
//     });
//     console.log(oldEnough);
//     return oldEnough;
// }
//
// var people = [
//     {name: "Betsy", age: 5},
//     {name: "Jimmy", age: 21},
//     {name: "Bobby", age: 73}
// ];
//
// drinkingAge(people);
//
// function fancyDishes(menuItems) {
//     var fancyMenu = menuItems.filter(function(menu){
//         return menu.name.length > 30;
//     })
//     console.log(fancyMenu);
//     return fancyMenu;
// }
//
// var menuItems = [
//     {name: "fish sticks"},
//     {name: "Spaghetti and meatballs"},
//     {name: "Charbroiled Rainbow Trout with Lemon-creme Sauce and Capers"},
//     {name: "Pan-Seared Duck Fois Gras Terraine with Spiced Citrus"}
//
// ];
//
// fancyDishes(menuItems);

/*
 * An array is considered "lengthy" if it has more than 4 items.
 * Given an array of arrays, return a new array of only the short arrays
 * from the original array of arrays.
 *
 * E.g.


 result: [
 [2, 41, false, "buzz", {}],
 [10, 11, 12, 13, 14]
 ];
 * */

function shorts(stuff) {
	var shortArr = stuff.filter(function (array) {
		return array.length <= 4;
	});
	console.log(shortArr);
	return shortArr;
}

var stuff = [
    [1, 42, true, "fizz"],
    [2, 41, false, "buzz", {}],
    [false],
    [10, 11, 12, 13, 14]
];

shorts(stuff);
