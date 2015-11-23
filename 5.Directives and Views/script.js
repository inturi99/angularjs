// Code goes here

// Code goes here

(function() {
  var app = angular.module("githubViewer", []);
  
  var MainController = function($scope, $http){
  
    var onUserComplete = function(response){
      $scope.user = response.data;
    };
  
    var onError = function (response){
      $scope.error = "could not fetch the user";
    };
    
  $scope.search = function(username){
    $http.get("https://api.github.com/users/" + username)
    .then(onUserComplete, onError);
  };
    
    $scope.username ="Angular";
    $scope.message = "Hello, Angular";
  };
 app.controller("MainController", ["$scope", "$http", MainController]);
}());