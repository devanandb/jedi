angular.module('articles', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('articles').config(function($routeProvider) {

    $routeProvider.when('/articles',{templateUrl: 'articles/partial/articles/articles.html'});
    $routeProvider.when('/category/:category',{templateUrl: 'articles/partial/category/category.html'});
    $routeProvider.when('/article/:id',{templateUrl: 'articles/partial/detail/detail.html'});
    $routeProvider.when('/tag/:tag',{templateUrl: 'articles/partial/tagged/tagged.html'});
    /* Add New Routes Above */

});