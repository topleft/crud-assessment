angular.module('directives')
	.directive('outputTemplate', [ 'crudFactory', 'frontEndDataFactory', function(crudFactory, frontEndDataFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '=',
					action: '='
				},
				templateUrl: 'output/output.html',
				controller: function($scope, crudFactory, frontEndDataFactory){
					getAllItems();
					function getAllItems (){
						crudFactory.getAllItems()
							.success(function(response){
								$scope.collections.items = response;
							});
					}

					$scope.deleteItem = function (id){
						crudFactory.deleteItem(id)
							.success(function(){frontEndDataFactory.findAndDelete(id, $scope.collections.items);
								$scope.action.message = "Success! Item deleted from the database";
								$scope.action.bootstrap = 'alert-success';
							});
					};



					$scope.toggleUpdate = function(id) {
						$scope.update = id;

					};

					$scope.updateItem = function(id, name, type) {
						crudFactory.updateItem(id, name, type)
							.success(function(response){
								$scope.action.message = "Success! Item updated in the database";
								$scope.action.bootstrap = 'alert-success';
								$scope.update = false;
							});
					};
				
				}  
			};

	}]);