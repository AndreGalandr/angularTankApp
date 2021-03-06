'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.works',
  'myApp.about',
  'myApp.contacts',
  'myApp.blog',
  'ngMaterial',
  'ngMessages',
  'validationApp',
  'slider'
  

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);


