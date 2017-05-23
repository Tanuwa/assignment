var app = angular.module('MyApp', []);
app.controller('MainController', function ($scope) {


	$scope.allBadges = [];

	$scope.submit = function (badge) {
		$scope.allBadges.push(badge)

	}

})

$
