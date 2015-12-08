var app = angular.module('PartyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/index.html'
  })
  .when('/new', {
  	templateUrl:'app/views/new.html'
  })
  .when('/parties/:id',{
  	templateUrl: 'app/views/show.html'})
  .when('/index',{
  	templateUrl: 'app/views/all_parties.html'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

  $locationProvider.html5Mode(true);
}]);