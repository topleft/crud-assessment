	angular.module("directives").directive('messageTemplate', [function(){
		return {
			restrict: 'E',
			templateUrl: 'message/message.html',
			link: function(scope, element, attrs){
				console.log(element[0]);
			}
			};
	}]);