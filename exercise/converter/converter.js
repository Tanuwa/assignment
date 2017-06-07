var app = angular.module("myApp", []);

app.controller("convert", ["$scope", "$database", function ($scope, database) {
	$scope.temps = [10, 15, 20, 25, 30];
	}]);
app.filter("convertFilter", function () {
	return function (input) {
		return (input * 9 / 5) + 32 + "°F";
	}
});


app.service("database", function ($http) {
	var url = "https://api.darksky.net/forecast/1cfc2e101879f558ff0134daafd11f0e/40.758701, 111.876183;"
	//	var headers = {
	//		params: {
	//			appid: '1cfc2e101879f558ff0134daafd11f0e'
	//			latitude: 40.758701,
	//			longitude: 111.876183
	//		}
	//	}
	this.getWeather = function () {
		return $http.get(url).then(
			function (response) {
				return (response.data);
			})
	};
});

//1cfc2e101879f558ff0134daafd11f0e

//https://api.darksky.net/forecast/1cfc2e101879f558ff0134daafd11f0e/37.8267,-122.4233







//				app.service("convertService", function () {
//						this.convertTemp =
//					}
//				}
