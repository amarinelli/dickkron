(function(angular) {

  // The module code
  angular
  .module('angularApp', [])
  .controller('MainController', ['$scope', '$http', MainController]); //use this array syntax for minification

  // The controller code
  function MainController($scope, $http) {

    $scope.options = [
      {label: 'Aaron', value: 'Aaron'},
      {label: 'Shawn', value: 'Shawn'},
      {label: 'Ian', value: 'Ian'},
      {label: 'Pete', value: 'Pete'},
      {label: 'Roger', value: 'Roger'}
    ];

    var onGetFriend = function(response) {
      $scope.friends = response.data;
      $scope.friendName = response.data[$scope.correctlySelected.value].name
      $scope.friendCaption = response.data[$scope.correctlySelected.value].caption
	  $scope.friendMedia = response.data[$scope.correctlySelected.value].media
	  $("#media").html($scope.friendMedia);
	  
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data.";
    };

    $scope.search = function(username) {
      $http.get("data/info.json")
      .then(onGetFriend, onError);
    };

    $scope.home = function() {
      $scope.friends = false;
    }

    $scope.greeting = "Identify yourself...";

  }

})(window.angular);
