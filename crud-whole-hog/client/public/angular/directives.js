var directives = angular.module('directives', ['factories']);
	
	directives.directive('formTemplate', ['crudFactory',
		function(crudFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '=',
					action: '='
				},
				templateUrl: '../views/form.html',
				controller: function($scope, crudFactory){
					console.log("form controller")
					$scope.items = angular.copy($scope.collections);
					
					$scope.addItem = function(){
						crudFactory.createItem($scope.collections.newItem.name, $scope.collections.newItem.type).
							success(function(response){
							$scope.collections.items.push(response[0]);
							$scope.action.message = "Success! Item added to database.";
							$scope.action.bootstrap = 'alert-success';
							$scope.collections.newItem.name = "";
							$scope.collections.newItem.type = "";
							});
					};
					console.log("directive $scope: ");
					console.log($scope);
				}
			};
		}]);


	directives.directive('outputTemplate', [ 'crudFactory', 'frontEndDataFactory', function(crudFactory, frontEndDataFactory){
			return {
				restrict: 'A',
				scope: {
					collections: '=',
					action: '='
				},
				templateUrl: '../views/output.html',
				controller: function($scope, crudFactory, frontEndDataFactory){
					getAllItems();
					function getAllItems (){
						crudFactory.getAllItems()
							.success(function(response){
								$scope.collections.items = response;
							});
					}

					$scope.deleteItem = function (id){
						crudFactory.deleteItem(id)
							.success(function(){frontEndDataFactory.findAndDelete(id, $scope.collections.items);
								$scope.action.message = "Success! Item deleted from the database";
								$scope.action.bootstrap = 'alert-success';
							});
					};



					$scope.toggleUpdate = function(id) {
						$scope.update = id;

					};

					$scope.updateItem = function(id, name, type) {
						crudFactory.updateItem(id, name, type)
							.success(function(response){
								$scope.action.message = "Success! Item updated in the database";
								$scope.action.bootstrap = 'alert-success';
								$scope.update = false;
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

	directives.directive('logoutButton', ['authFactory', '$location', function(authFactory, $location){
		return {
			restrict: 'E',
			scope: {
				logout: '='
			},
			templateUrl: '../views/logout.html',
			controller: function($scope, $location){
				$scope.logout = function(){
						authFactory.logoutUser()
						.then(function(){
							$location.path("/login");
						});			
				};
			}
		};
	}]);

