var directives = angular.module('directives', ['factories']);
	
	directives.directive('formTemplate', ['crudFactory',
		function(crudFactory){
			return {
				restrict: 'A',
				scope: {
					newItem: '=ngModel'
				},
				templateUrl: '../views/form.html',
				link: function(scope, element, attrs){
					console.log(scope.newItem);
					scope.createItem = function(){
						crudFactory.createItem(scope.newItem.name, scope.newItem.type).
							success(function(){
								//push item into item array
							});
					};
					console.log("directive scope: ");
					console.log(scope);
				}
			};
		}]);


	directives.directive('outputTemplate', [ 'crudFactory', function(crudFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '=ngModel'
				},
				templateUrl: '../views/output.html',
				link: function(scope, element, attrs){
					console.log('in output')
					// get all items
					getAllItems();

					function getAllItems (){
						crudFactory.getAllItems()
							.success(function(response){
								scope.collections.items = response;
								console.log(response[4]);
							});
					}
				}  
			};
	}]);