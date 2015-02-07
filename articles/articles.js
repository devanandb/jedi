angular.module('articles', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('articles').config(function($routeProvider) {

    $routeProvider.when('/articles',{templateUrl: 'articles/partial/articles/articles.html'});
    /* Add New Routes Above */

});

