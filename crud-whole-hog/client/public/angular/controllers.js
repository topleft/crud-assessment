console.log("sanity");

var app = angular.module('myApp');

app.controller("myController", ['$scope', function($scope){
	
	$scope.title = "The Whole Hog";
  $scope.action = {};
  $scope.action.bootstrap = "panel-success";
	$scope.action.message = "";
	$scope.collections = {};
	$scope.collections.newItem = {};
	$scope.update = false;
	console.log("Controller scope: ");
	console.log($scope);
}]);


app.controller("registerController", ['$scope', function($scope){
	console.log("register controller");



}]);


app.controller("loginController", ['$scope', '$location', 'authFactory', function($scope, $location,authFactory){
	console.log(authFactory.getUserStatus());

	$scope.login = function(){
		$scope.error = false;
		$scope.disable = true;
		console.log($scope.login.username, $scope.login.password);
		authFactory.loginUser($scope.login.username, $scope.login.password)
			.then(function(){
				$location.path('/');
				$scope.diabled = false;
				$scope.login = {};
			})
			.catch(function(){
				$scope.error = true;
					$scope.errorMessage = "Invalid user name and/or password.";
					$scope.disabled= false;
					$scope.login = {};
			});

	}
}]);


// app.controller("logoutController", ['$scope', '$location', 'authFactory', function($scope, $location, authFactory){
// 	console.log("logout controller");
// 	$scope.auth = {};
// 	$scope.auth.logout = function(){
// 		authFactory.logoutUser()
// 		.then(function(){
// 			$location.path("/login");
// 		});
// 	};




// }]);





