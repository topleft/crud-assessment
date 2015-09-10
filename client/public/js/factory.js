
angular.module("factories", [])

angular.module("factories").factory("crudFactory",["$http", function($http){

  var baseUrl = "/api/v1";

  return {
    getAllData: function(){
      return $http.get(baseUrl+"/programs");
    },
    getOneData: function(id){
      return $http.get(baseUrl+"/programs/:"+id);
    },
    createData: function(name, language){
      return $http.post(baseUrl+"/programs", {name: name, language: language});
    },
    updateOneItem: function(id, program){
      return $http.put(baseUrl+"/programs/:"+id, program);
    },
    deleteOneItem:function(id){
      return $http.put(baseUrl+"/programs/:"+id);
    }
  };
}]);

