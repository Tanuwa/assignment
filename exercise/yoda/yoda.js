var app = angular.module("YodaApp", []);


app.controller("MainController", ["$scope", "YodaSpeakService", function ($scope, YodaSpeakService) {

    $scope.yodaTranslate = function (yodaSpeech) {
        YodaSpeakService.getYodaSpeak(yodaSpeech).then(function (response) {

            $scope.yodaSpeak = response.data;
        });
    };

}]);

app.service("YodaSpeakService", ["$http", function ($http) {
    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    this.getYodaSpeak = function (yodaSpeech) {
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + yodaSpeech, config);
    };
}]);
