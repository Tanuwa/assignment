var app = angular.module("weatherApp", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider) {

	$routeProvider
		.when("/weather", {
			templateUrl: "components/weather/weather.html",
			controller: "WeatherCtrl"
		})
		.when("/home", {
			templateUrl: "components/home/home.html",

		})
		.when("/thankyou", {
			templateUrl: "components/thankyou/thankyou.html",

		})
		.otherwise({
			redirectTo: "/weather"
		});
}]);
