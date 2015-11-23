var MainController = function ($scope, $http) {
   var onUserComplete = function(response) {
     $scope.user = response.data;
   };
   var onError = function (response) {
     $scope.error = "Could not fetch the user";
   };
  $http.get("https://api.github.com/users/inturi99")
      .then(onUserComplete, onError);
     
   $scope.message = "Helo, Angular";
};