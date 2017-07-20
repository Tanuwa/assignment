//mock database acting as our API

var app = angular.module("weatherApp");

app.service("database", function ($http) {
	var url = 'http://api.openweathermap.org/data/2.5/forecast/';
	var headers = {
		params: {
			q: 'Salt Lake City',
			mode: 'json',
			units: 'imperial',
			appid: 'a0045dc359ab2b0fadf87839c40a228a',
		}
	}
	this.getWeather = function () {
		return $http.get(url, headers).then(
			function (serverResponse) {
				return (serverResponse.data);
			})
	};
});



//	var URL = 'http://api.openweathermap.org/data/2.5/forecast/';
//
//	var request = {
//		method: 'GET',
//		url: URL,
//		params: {
//			q: 'Salt Lake City',
//			mode: 'json',
//			units: 'imperial',
//			appid: 'a0045dc359ab2b0fadf87839c40a228a',
//			cnt: 7
//		}

//	$http(request)
//		.then(function (response) {
//			this.vm.data = response.data;
//		}).
//	catch(function (response) {
//		this.vm.data = response.data;
//id=524901
//	});
//	};
