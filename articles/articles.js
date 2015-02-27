angular.module('articles', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('articles').config(function($routeProvider) {

    $routeProvider.when('/articles',{templateUrl: 'articles/partial/articles/articles.html'});
    $routeProvider.when('/articles/:category',{templateUrl: 'articles/partial/category/category.html'});
    $routeProvider.when('/article/:id',{templateUrl: 'articles/partial/detail/detail.html'});
    $routeProvider.when('/tag/:tag',{templateUrl: 'articles/partial/tagged/tagged.html'});
    /* Add New Routes Above */

});

angular.module('articles').controller('GlobalCtrl',function($rootScope, $scope, databank, categoryService, $routeParams, $location){


    window.scope = $scope;
    categoryService.query(function(data) {

        var regex = /<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/;
        angular.forEach(data, function(category) {
            
            if (category.title === $routeParams.category) {
                category.field_hero_image = regex.exec(category.field_hero_image);
                $scope.category = category;
            }
        });
    });

    databank.query(function(data) {
        $rootScope.articles = [];

        angular.forEach(data, function(article) {
            article.ctags = article.field_tags.toLowerCase().replace(/\s+/g, '-').split(',');
            if (article.field_category === $routeParams.category) {
                $rootScope.articles.push(article);
            } else {
                // $location.path('/');
            }
        });

        $rootScope.articles = $scope.articles;
    });
});