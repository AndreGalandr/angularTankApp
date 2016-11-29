'use strict';

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'pages/home.html',
		controller: 'homeCtrl'
	})

	.when('/works', {
		templateUrl: 'pages/works.html',
		controller: 'worksCtrl'
	})

	.when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'aboutCtrl'
	})

	.when('/contacts', {
		templateUrl: 'pages/contacts.html',
		controller: 'contactsCtrl'
	})

	.when('/blog', {
		templateUrl: 'pages/blog.html',
		controller: 'blogCtrl'
	});
});

myApp.controller('homeCtrl', function($scope) {

});

myApp.controller('worksCtrl', function($scope) {

});

myApp.controller('aboutCtrl', function($scope) {

});

myApp.controller('contactsCtrl', function($scope) {

});

myApp.controller('blogCtrl', function($scope) {

});