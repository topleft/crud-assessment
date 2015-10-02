angular.module('routes', ['ngRoute']);

angular.module('routes').config(['$routeProvider', function($routeProvider){
	console.log('routes');
	$routeProvider
	.when('/',{
		templateUrl: '../views/index.html'
	})
	.when('/login', {
		templateUrl: '../views/login.html',
		controller: 'loginController'
	})
	.when('/register', {
		templateUrl: '../views/register.html',
		controller: 'registerController'
	})
	.when('/logout', {
		templateUrl: '../views/logout.html',
		controller: 'logoutController'
	});

}]);
