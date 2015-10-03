angular.module('directives').directive('formTemplate', ['crudFactory',
		function(crudFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '=',
					action: '='
				},
				templateUrl: 'form/form.html',
				controller: function($scope, crudFactory){
					$scope.items = angular.copy($scope.collections);
					
					$scope.addItem = function(){
						crudFactory.createItem($scope.collections.newItem.name, $scope.collections.newItem.type).
							success(function(response){
							$scope.collections.items.push(response[0]);
							$scope.action.message = "Success! Item added to database.";
							$scope.action.bootstrap = 'alert-success';
							$scope.collections.newItem.name = "";
							$scope.collections.newItem.type = "";
							});
					};
				}
			};
		}]);
