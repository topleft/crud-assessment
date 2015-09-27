console.log("sanity");

angular.module('myApp').controller("myController", ['$scope', function($scope){
	
	$scope.title = "The Whole Hog";


	$scope.collections = {};
	$scope.collections.newItem = {};

	console.log("Controller scope: ");
	console.log($scope);
}]);