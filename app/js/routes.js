// Routes

(function() {

var app = angular.module("app");

ws.config(["$routeProvider", function($routeProvider) {
  
  // $routeProvider.when("/items", {
  //   controller: "Controller",
  //   templateUrl: "<dir>/<name>.html"
  // });


  $routeProvider.otherwise({
    redirectTo: "/"
  });

}]);

})();
