	angular.module("directives").directive('messageTemplate', [function(){
		console.log("message")
		return {
			restrict: 'E',
			templateUrl: 'message/message.html'
			};
	}]);