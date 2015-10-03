angular.module('routes', ['ngRoute']);

angular.module('routes').config(['$routeProvider', function($routeProvider){
	console.log('routes');
	$routeProvider
	.when('/',{
		templateUrl: '../views/index.html',
		access: {restricted: true}
	})
	.when('/login', {
		templateUrl: '../views/login.html',
		controller: 'loginController',
		access: {restricted: false}
	})
	.when('/register', {
		templateUrl: '../views/register.html',
		controller: 'registerController',
		access: {restricted: false}
	})
	.when('/logout', {
		templateUrl: '../views/logout.html',
		controller: 'logoutController'
	});

}]);
