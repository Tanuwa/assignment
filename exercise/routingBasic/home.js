angular.module("myApp", ["ngRoute"])
	.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				controller: 'homeController',
				templateUrl: "home.html"
			})
			.when("/about", {
				controller: "aboutController",
				templateUrl: "about.html"
			})

			.when("/whyilove", {
				controller: 'whyiloveController',
				templateUrl: "whyilove.html"
			})
			.when("/home", {
				controller: 'homeController',
				templateUrl: "home.html"
			})

	})
	.controller("homeController", function ($scope) {
		$scope.name = "Utah";
	});
