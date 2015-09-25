angular.module('directives', [])
	.directive('formTemplate',
		function(){
			return {
				restrict: 'A',
				scope: {
					item: '='
				},
				templateUrl: '../views/form.html',
				controller: function($scope){
					$scope.item.name;
					$scope.item.type;
				}
			};
		});
