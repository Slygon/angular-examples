var app = angular.module('myApp', []);

app.factory('myFactory', function () {
	return { };
});

app.controller('myController1', ['$scope', 'myFactory', function ($scope, myFactory) {

	$scope.shared = myFactory;	
}]);

app.controller('myController2', ['$scope', 'myFactory', function ($scope, myFactory) {
	$scope.shared = myFactory;
}]);

app.controller('myController3', ['$scope', function ($scope) {
	
}]);