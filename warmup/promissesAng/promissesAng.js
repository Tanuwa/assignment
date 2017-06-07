var app = angular.module("mainApp", []);
app.controller("mainCtrl", ["$scope", "httpService",function ($scope, httpService) {
		var promise = $http.get("http://swapi.co/api/people/");




}])
