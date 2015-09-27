var directives = angular.module('directives', ['factories']);
	
	directives.directive('formTemplate', ['crudFactory',
		function(crudFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '=ngModel'
				},
				templateUrl: '../views/form.html',
				link: function(scope, element, attrs){
					console.log(scope.collections.newItem);
					scope.createItem = function(){
						crudFactory.createItem(scope.collections.newItem.name, scope.collections.newItem.type).
							success(function(response){
								console.log(response[0])
							scope.collections.items.push(response[0]);
							});
					};
					console.log("directive scope: ");
					console.log(scope);
				}
			};
		}]);


	directives.directive('outputTemplate', [ 'crudFactory', 'frontEndDataFactory', function(crudFactory, frontEndDataFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '=ngModel'
				},
				templateUrl: '../views/output.html',
				link: function(scope, element, attrs){
					getAllItems();
					function getAllItems (){
						crudFactory.getAllItems()
							.success(function(response){
								scope.collections.items = response;
							});
					}

					scope.deleteItem = function (id){
						console.log(id);
						crudFactory.deleteItem(id)
							.success(frontEndDataFactory.findAndDelete(id, scope.collections.items));
					};
				
				}  
			};

	}]);