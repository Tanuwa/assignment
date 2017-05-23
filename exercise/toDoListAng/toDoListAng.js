var app = angular.module("myApp", []);


app.controller("MainCtrl", ["$scope", function ($scope) {

	$scope.todos = [];
	$scope.submit = function (todo) {
		var displayTodo = {
			name: todo.name,
			description: todo.description,
			url: todo.url,
			price: todo.price
		}
		$scope.todos.push(displayTodo);
		$scope.newtodo = {};
	};

}]);




//var object = {
//	property: "reference"
//};
//
//
//var place = object;
//
//place.property = "something else";
//
//console.log(object.property);
//
//
//var letter = "stuff";
//
//var newLetter = letter;
//
//newLetter = "something else";
//console.log(letter);
