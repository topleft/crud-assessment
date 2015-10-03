	angular.module("directives").directive('messageTemplate', [function(){
		return {
			restrict: 'E',
			templateUrl: 'message/message.html'
			};
	}]);