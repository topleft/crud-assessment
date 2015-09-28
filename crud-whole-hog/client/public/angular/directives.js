var directives = angular.module('directives', ['factories']);
	
	directives.directive('formTemplate', ['crudFactory',
		function(crudFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '=ngModel',
					action: '=ngModel'
				},
				templateUrl: '../views/form.html',
				link: function(scope, element, attrs){
					scope.createItem = function(){
						crudFactory.createItem(scope.collections.newItem.name, scope.collections.newItem.type).
							success(function(response){
							scope.collections.items.push(response[0]);
							scope.action.message = "Success! Item added to database."
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
					collections: '=ngModel',
					action: '=ngModel'
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
						crudFactory.deleteItem(id)
							.success(function(){frontEndDataFactory.findAndDelete(id, scope.collections.items);
								scope.action.message = "Success! Item deleted from the database";
							});
					};



					scope.toggleUpdate = function(id) {
						scope.update = id;

					};

					scope.updateItem = function(id, name, type) {
						crudFactory.updateItem(id, name, type)
							.success(function(response){
								scope.action.message = "Success! Item updated in the database";
								scope.update = false;
							});
					};
				
				}  
			};

	}]);


	directives.directive('navTemplate', [function(){
		return {
			restrict: 'A',
			templateUrl: '../views/nav.html',
			link: function(scope, element, attrs){
				console.log('nav')
			}
		}
	}])