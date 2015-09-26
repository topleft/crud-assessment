console.log("sanity");

angular.module('myApp').controller("myController", ['$scope', function($scope){
	
	$scope.title = "The Whole Hog";
	console.log("Controller scope: ")
	console.log($scope)
	// console.log($scope.$child.item.name)
	// $scope.items = [];
	$scope.item = {name: "thing", type: "stuff"};
}]);