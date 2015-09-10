// console.log("controller")

var crudApp = angular.module('crudApp', ['routesModule', "factories"]);

// angular.module('crudModule', ['ui.bootstrap']);


crudApp.controller("crudController", ["$scope", "crudFactory",
  function($scope, crudFactory){

  $scope.programs;
  $scope.status;


  $scope.getData = function(){
    crudFactory.getAllData()
    .success(function(programs){
      $scope.programs = programs;
    });
  }

  $scope.getData();
  $scope.post = function(){
    crudFactory.createData($scope.program.name, $scope.program.language)
    .success(function(program){
      $scope.programs = program;
      $scope.getData();
      console.log(program);
    })
  }


}]);

