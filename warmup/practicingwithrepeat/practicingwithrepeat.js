var app = angular.module("learningRepeat", []);
app.controller("myCntrl", ["$scope", function ($scope) {
	$scope.todos = [
		{
			name: "Hanna",
			price: "$2.00"
		},
		{
			name: "Emma",
			price: "$3.00"
		},
		{
			name: "Anna",
			price: "$7.00"
		}


	];


}]);
