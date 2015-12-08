angular.module("PartyCtrls", ["PartyServices"])

.controller('PartyCtrl', ['PartyFactory', '$scope', function(PartyFactory, $scope) {
  Party.query(function success(data) {     
      $scope.parties = data;
      console.log($scope.parties);
  }, function error(data) {
      console.log("This is the error: ")
      console.log(data);
  });
}])
.controller("PartyShowCtrl", ["$scope", "$routeParams", "PartyFactory", function($scope, $routeParams, PartyFactory) {

  Party.get({id: $routeParams.id}, function success(data) {
    console.log(data)
    $scope.party = data
  }, function error(data){
    console.log(data)
  });
}])
.controller('NewCtrl', ['$scope', '$location', 'PartyFactory', function($scope, $location, PartyFactory) {
  $scope.party = {
    name: '',
    item: [],
    guest: []
  };
  $scope.createParty = function() {
    Party.save($scope.Party, function success(data) {
      $location.path('/');
    }, function error(data) {
      console.log(data);
    });
  }
}])

