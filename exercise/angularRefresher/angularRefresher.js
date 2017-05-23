var app = angular.module("myApp", []);


app.controller("SecondCtrl", ["$scope", function ($scope) {

			$scope.todo = $scope.todo.name + $scope.todo.descrption + $scope.todo.url


})
