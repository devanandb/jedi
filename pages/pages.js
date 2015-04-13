angular.module('pages', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('pages').config(function($routeProvider) {

    $routeProvider.when('/',{templateUrl: 'pages/partial/home/home.html'});
    $routeProvider.when('/home-alt',{templateUrl: 'pages/partial/homealt/homealt.html'});
    $routeProvider.when('/about',{templateUrl: 'pages/partial/about/about.html'});
    /* Add New Routes Above */

});

