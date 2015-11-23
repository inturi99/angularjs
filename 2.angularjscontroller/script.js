var MainController = function ($scope){
  var person = {
    firstname: "krishna",
    lastname: "inturi",
    imageSrc: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/04a/173/1cf602e.jpg"
  };
  $scope.message = "Hello, Angular !";
  $scope.person = person;
};