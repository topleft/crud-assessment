angular.module('directives')
	.directive('navTemplate', [function(){
		return {
			restrict: 'A',
			templateUrl: 'nav/nav.html',
			link: function(scope, element, attrs){
				console.log('nav');
			}
		};
	}]);

	directives.directive('messageTemplate', [function(){
		return {
			restrict: 'A',
			templateUrl: '../views/message.html'
			};
	}]);
