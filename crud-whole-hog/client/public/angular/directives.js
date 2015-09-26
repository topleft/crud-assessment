var directives = angular.module('directives', []);
	
	directives.directive('formTemplate',
		function(){
			return {
				restrict: 'A',
				scope: {
					item: '=ngModel'
				},
				templateUrl: '../views/form.html',
				link: function(scope, element, attrs){
					// scope.item.name = 'pork'; 
					// scope.item.type = 'meat';
					console.log("directive scope: ");
					console.log(scope);
					// console.log($scope.item.type);
				}
			};
		});
