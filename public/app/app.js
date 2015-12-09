var app = angular.module('PartyApp', ['ngRoute', "PartyCtrls", "PartyServices"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/index.html'
  })
  .when('/new', {
  	templateUrl:'app/views/new.html',
    controller: "NewCtrl"
  })
  .when('/parties/:id',{
  	templateUrl: 'app/views/show.html',
    controller: "NewCtrl"
  })
  .when('/index',{
  	templateUrl: 'app/views/all_parties.html'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);