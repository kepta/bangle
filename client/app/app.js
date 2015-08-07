'use strict';

var dump = angular.module('dump', []);
var contacts = angular.module('contacts', []);
var wells = angular.module('wells', []);

var bangle = angular.module('bangleApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ngMaterial',
  'ngMdIcons',
  'dump',
  'contacts',
  'wells'
]);

bangle
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
    $locationProvider.html5Mode(true);
  })
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('orange');
  });
