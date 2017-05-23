var app = angular.module('MyApp', []);

app.controller('MainController', function ($scope) {



    $scope.homie = [
        firstName: "Johny",
        lastName: "Mathis"
        },

        {
            firstName: "Bugs",
            lastName: "Rabbit"
        }

    ]; $scope.getFullName = function () {
    return$scope.homie.firstName + '' + $scope.person.lastName;
};
});
