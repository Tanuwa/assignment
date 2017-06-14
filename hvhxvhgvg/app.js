var app = angular.module("myApp", []);
app.controller("myCont", ["$scope", "mySer", function ($scope, mySer) {
	$scope.person = {
		firstName: "John",
		lastName: "Smith"
	};

	$scope.getFullName = function () {
		return $scope.person.firstName + '' + $scope.person.lastName
	}
						 }]);
app.server("mySer", function () {
	this.personLoggedIn = undefined;
});
