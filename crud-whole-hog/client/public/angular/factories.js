angular.module('factories', []).
	factory('crudFactory', [ '$http', function ($http) {

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