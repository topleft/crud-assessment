

angular.module('routesModule', ['ngRoute']);

angular.module('routesModule').config(["$routeProvider", function($routeProvider){
console.log("ang-routes");

  $routeProvider.when("/", {
    controller: "crudController",
    templateUrl: "../views/index.html"
  })
}]);