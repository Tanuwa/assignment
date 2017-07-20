var app = angular.module("weatherApp");

app.controller("WeatherCtrl", ["$scope", "database", function ($scope, database) {
	database.getWeather().then(function (databaseResponse) {
		$scope.weather = databaseResponse;
		console.log($scope.weather);
		var date = new Date();
		console.log(Date.now());
	});
}]);
