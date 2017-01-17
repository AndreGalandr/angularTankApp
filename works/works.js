'use strict';

angular.module('myApp.works', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/works', {
    templateUrl: 'works/works.html',
    controller: 'worksCtrl'
  });
}])

.controller('worksCtrl', [function() {

}]);