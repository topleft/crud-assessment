console.log("sanity");

angular.module('myApp').controller("myController", ['$scope', function($scope){
	
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