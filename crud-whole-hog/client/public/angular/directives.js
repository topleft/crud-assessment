var directives = angular.module('directives', ['factories']);
	
	directives.directive('formTemplate', ['crudFactory',
		function(crudFactory){
			return {
				restrict: 'A',
				scope: {
					item: '=ngModel'
				},
				templateUrl: '../views/form.html',
				link: function(scope, element, attrs){
					console.log(scope.item);
					scope.createItem = function(){
						crudFactory.createItem(scope.item.name, scope.item.type);
					};
					console.log("directive scope: ");
					console.log(scope);
				}
			};
		}]);
