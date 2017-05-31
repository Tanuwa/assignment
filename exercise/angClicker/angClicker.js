var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, redService, blueService) {
	$scope.red = redService.red;
	$scope.blue = blueService.blue;
	$scope.redSubmit = function () {
		redService.increment();
		blueService.decrement();
		if (blueService.blue === 0) {
			blueService.reset();
		}
		$scope.red = redService.red;
		$scope.blue = blueService.blue;
	}
	$scope.blueSubmit = function () {
		blueService.increment();
		redService.decrement();

		if (redService.blue === 0) {
			redService.reset();
		}
		$scope.red = redService.red;
		$scope.blue = blueService.blue;
	}
})
app.service("redService", function () {
	this.red = 100;
	this.decrement = function () {
		this.red--;
	}
	this.increment = function () {
		this.red++;
	}
	this.reset = function () {
		this.red = 100;
	}
});
app.service("blueService", function () {
	this.blue = 100;
	this.increment = function () {
		this.blue++;
	}
	this.decrement = function () {
		this.blue--;
	}
	this.reset = function () {
		this.blue = 100;
	}
});
