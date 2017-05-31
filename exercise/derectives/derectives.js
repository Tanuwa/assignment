var app = angular.module("myApp", []);
app.controller('mainController', ['$scope', function ($scope) {
	$scope.allen = {
		name: "Allen Woody",
		email: 'email@email.com'
	}

	$scope.bif = {
		name: 'Bif',
		email: 'iamfromthepast.email'
	}
}])
app.directive("myInfo", function () {

	return {
		restrict: 'A',
		scope: {
			'contactInfo': '=myInfo'
		},
		template: '<span>{{contactInfo.name}}--reac me at {{contactInfo.email}}</span>'
	}


});
