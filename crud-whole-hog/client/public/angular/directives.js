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
						crudFactory.deleteItem(id)
							.success(frontEndDataFactory.findAndDelete(id, scope.collections.items));
					};



					scope.toggleUpdate = function(id) {
						scope.update = id;

					};

					scope.updateItem = function(id, name, type) {
						crudFactory.updateItem(id, name, type)
							.success(function(response){
								console.log(response);
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