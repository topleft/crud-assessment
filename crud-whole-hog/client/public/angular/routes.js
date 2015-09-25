angular.module('routes', ['ngRoute']);

angular.module('routes').config(['$routeProvider', function($routeProvider){
	console.log('routes');
	$routeProvider
	.when('/',{
		templateUrl: '../views/form.html'
	});
}]);
