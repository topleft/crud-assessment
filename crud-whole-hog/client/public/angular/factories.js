var factories = angular.module('factories', []);

	factories.factory('crudFactory', [ '$http', function ($http) {

		return {
			createItem: function(name, type) {
				return $http.post('/items/'+name+'/'+type);
			},
			getItem: function(id) {
				return $http.get('/items/'+id);
			},
			getAllItems: function() {
				return $http.get('/items');
			},
			updateItem: function(id, name, type) {
				return $http.put('/items/'+id+'/'+name+'/'+type);
			},
			deleteItem: function(id) {
				return $http.delete('items/'+id);
			}
		};

	}]);

	factories.factory('frontEndDataFactory', [function(){
		
		return {
			add: function(arr, item){
				arr.push(item);
			},
			findAndDelete: function(id, items) {
				for (var i = 0; i < items.length; i++) {
					if (items[i]._id === id){
						items.splice(i, 1);
					}								
		  	}
		  }
		};

	}]);

	factories.factory('authFactory', [ '$http','$q', function($http, $q) {
			var user = null;

		return {
			isLoggedIn: function(){
				if (user){
					return true;
				}
				else {
					return false;
				}
			},
			getUserStatus: function(){
				return user;
			},
			registerUser: function(username, password){
				var q = $q.defer();
				$http.post('/register', {username: username, password: password})
					.success(function(data, status) {
						if (status === 200 && data.status) {
							user = true;
							q.resolve();
						} 
						else {
							q.reject();
						}
					})
					.error(function(data){
						q.reject();
					});
					return q.promise;
			},
			loginUser: function(username, password){
				var q = $q.defer();
				$http.post('/login', {username: username, password: password})
					.success(function(data, status){
						if (status === 200 && data.status){
							user = true;
							q.resolve();
						}
						else{
							user = false;
							q.reject();
						}
					})
					.error(function(){
						user = false;
						q.reject();
					});
					return q.promise;
			},
			logoutUser: function(){
				var q = $q.defer();
				$http.get('/logout')
				.success(function(data){
					user = false;
					q.resolve();
				})
				.error(function(data){
					user = false;
					q.reject();
				});
				return q.promise;
			}
		};

	}]);


