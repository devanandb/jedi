angular.module('articles').controller('CategoryCtrl',function($rootScope, $scope, databank, categoryService, $routeParams, $location){


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
		$scope.articles = [];

		angular.forEach(data, function(article) {
			article.ctags = article.field_tags.toLowerCase().replace(/\s+/g, '-').split(',');
	        if (article.field_category === $routeParams.category) {
				$scope.articles.push(article);
	        } else {
				// $location.path('/');
	        }
	    });

	    console.log($scope.articles);
	    var $container = $('.matrix');

	    $container.imagesLoaded( function() {
	        
	         $container.masonry({
              columnWidth: '.uk-width-medium-1-2',
              itemSelector: '.each-card'
            });

	    });
	    // $container.masonry({
     //          columnWidth: '.uk-width-medium-1-3',
     //          itemSelector: '.uk-width-medium-1-3'
     //        });

	    
	});
});