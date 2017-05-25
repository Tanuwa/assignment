var app = angular.module("myApp", []);
app.controller("myCtrl", ["$scope", "mngPockService", function ($scope, mngPockService) {
	$scope.myViews = mngPockService.storePock;
	$scope.add = function (name) {
		mngPockService.add(name)
	}
	$scope.remove = function (name) {
		mngPockService.remove(name)
	}
}]);
app.service("mngPockService", function () {
	this.storePock = [];
	this.add = function (name) {
		this.storePock.push(name)
	}
	this.remove = function (name) {
		this.storePock.splice(this.storePock.indexOf(name), 1)
	}



})
