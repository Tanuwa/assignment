var app = angular.module('learningAngular', []);

app.controller("myCtrl", ['$scope', function ($scope) {
	$scope.person = {
		firstName: "John",
		lastName: "Smith"
	};
	$scope.getFullName = function () {

		return $scope.person.firstName + ' ' + $scope.person.lastname

	}
		}]);
