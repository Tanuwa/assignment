var app = angular.module("MyApp", []);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.allUglyThings = [];
    $scope.submit = function(object) {
        $scope.allUglyThings.push(object);
    }

    $scope.uglyThing = {};

}]);
