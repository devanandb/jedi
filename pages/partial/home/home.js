angular.module('pages').controller('HomeCtrl',function($scope, $http){

	

    $scope.categories =[];

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
	      console.log($scope.articles);
	    }).
	    error(function(data, status, headers, config) {
	      // log error
    	});

});