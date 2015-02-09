angular.module('articles').controller('CategoryCtrl',function($rootScope, $scope, databank, categoryService, $routeParams, $location){


	window.scope = $scope;
	categoryService.query(function(data) {
		$scope.categories = [];
		angular.forEach(data, function(category) {
			
	        if (category.title === $routeParams.category) {
				$scope.crap = category;
	        }
	    });
	});

	databank.query(function(data) {
		$scope.articles = [];

		angular.forEach(data, function(article) {
			article.ctags = article.field_tags.replace(/\s+/g, '-').split(',');
	        if (article.field_category === $routeParams.category) {
				$scope.articles.push(article);
	        } else {
				$location.path('/');
	        }
	    });

	    console.log($scope.articles);
	    var $container = $('.matrix');

	    $container.imagesLoaded( function() {
	        
	         $container.masonry({
              columnWidth: '.uk-width-medium-1-3',
              itemSelector: '.uk-width-medium-1-3'
            });
	    });
		
	});


	
});