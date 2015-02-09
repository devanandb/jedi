angular.module('articles').controller('TaggedCtrl',function($rootScope, $scope, databank, categoryService, $routeParams, $location){
	databank.query(function(data) {
		$scope.articles = [];

		angular.forEach(data, function(article) {
			article.ctags = article.field_tags.replace(/\s+/g, '-').split(',');
	        if (article.ctags.indexOf($routeParams.tag) > -1) {
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