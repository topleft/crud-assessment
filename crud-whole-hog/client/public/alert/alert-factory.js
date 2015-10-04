angular.module('factories').factory('alertFactory', [ '$timeout', "$animate", function($timeout, $animate){
		var alerts = [{mesage: " "}];

		return {
			add: function (type, msg) {
     		var alert = {
          type: type,
          message: msg,
          close: function() {
              return closeAlert(this);
          }
      	};
      	console.log(alert)
      	$timeout(this.closeAlert, 3000, true, alert);
      	return alerts[0] = (alert);
       },
			closeAlert: function(alert){
				return alerts[0] = {message: " "};
			},
			get: function(){
				return alerts;
			}
		};


}]);