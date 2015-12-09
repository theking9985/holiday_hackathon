angular.module("PartyCtrls", ["PartyServices"])

.controller('PartyCtrl', ['PartyFactory', '$scope', function(PartyFactory, $scope) {
  PartyFactory.query(function success(data) {     
      $scope.parties = data;
      console.log($scope.parties);
  }, function error(data) {
      console.log("This is the error: ")
      console.log(data);
  });
}])
.controller("PartyShowCtrl", ["$scope", "$routeParams", "PartyFactory", function($scope, $routeParams, PartyFactory) {

  PartyFactory.get({id: $routeParams.id}, function success(data) {
    console.log(data)
    $scope.party = data
  }, function error(data){
    console.log(data)
  });
      $scope.guestItem;

console.log($scope.guestItem)
  $scope.items = shuffle($scope.guestItem)

  // fisher yates
  function shuffle(array) {
  console.log("This shit here");
  console.log(array)
  console.log(array.length)
    var copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);

      // And move it to the new array.
      copy.push(array.splice(i, 1)[0]);
    }
    return copy;
  }
}])
.controller('NewCtrl', [
  '$scope', 
  '$location', 
  'PartyFactory', 
  function($scope, $location, PartyFactory) {
    $scope.party = {
      name: '',
      item1: "",
      item2: "",
      item3: "",
      item4: "",
      item5: "",
      item6: "",
      item7: "",
      item8: "",
      item9: "",
      item10: "",
      guest1: "",
      guest2: "",
      guest3: "",
      guest4: "",
      guest5: "",
      guest6: "",
      guest7: "",
      guest8: "",
      guest9: "",
      guest10: "",
    };
    $scope.createParty = function() {
        $scope.guestArray = [];
        
        PartyFactory.save($scope.party, function success(data) {
          $scope.guestItem = [$scope.party.item1, $scope.party.item2, $scope.party.item3, $scope.party.item4, $scope.party.item5, $scope.party.item6, $scope.party.item7, $scope.party.item8, $scope.party.item9, $scope.party.item10]
          console.log("print")
          console.log($scope.guestItem);
          $location.path('/parties/:id');
        }, function error(data) {
          console.log(data);
        });
    };
}])

