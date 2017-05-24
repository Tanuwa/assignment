var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, myService) {
	myService.getData().then(function (response) {
		$scope.people = response.data.results;

	})

});









app.service("myService", function ($http) {
	this.getData = function () {
		return $http.get("http://swapi.co/api/people")
	}

})
