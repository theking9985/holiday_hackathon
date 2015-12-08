angular.module('PartyServices', ['ngResource'])
.factory('PartyFactory', ['$resource', function($resource) {
  return $resource('http://localhost:3000/api/party/:id');
}])
// window is where we store our auth token
