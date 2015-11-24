'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
 angular
 .module('yapp', [
    'ui.router',
    'snap',
    'ngAnimate'
    ])
 .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
    })
    .state('login', {
      url: '/login',
      parent: 'base',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
  })
    .state('signup', {
        url: '/signup',
        parent: 'base',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
    })
    .state('dashboard', {
      url: '/dashboard',
      parent: 'base',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
  })
    .state('overview', {
        url: '/overview',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/overview.html'
    })
    .state('purchase', {
        url: '/purchase',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/purchase1.html'
    })
    .state('profile', {
        url: '/profile',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/profile.html'
    });
});
