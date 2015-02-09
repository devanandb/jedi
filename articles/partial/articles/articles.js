angular.module('articles').controller('ArticlesCtrl',function($rootScope, $scope, $http){

	$http.get('http://designjedi.demofied.com/api/categories').
	    success(function(data, status, headers, config) {
	      $scope.categories = data;
	      console.log($scope.categories);


	    }).
	    error(function(data, status, headers, config) {
	      // log error
		});

	$http.get('http://designjedi.demofied.com/api/articles').
	    success(function(data, status, headers, config) {
	      $scope.articles = data;

	      $rootScope.articles = $scope.articles;
	      console.log($scope.articles);
	    }).
	    error(function(data, status, headers, config) {
	      // log error
		});
});