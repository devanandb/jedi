angular.module('articles').controller('TaggedCtrl',function($rootScope, $scope, databank, categoryService, $routeParams, $location){
	databank.query(function(data) {
		$scope.articles = [];

		
		if (localStorage.getItem('refresh') === 'once') {
			console.log('alternate');
			$('.hero-blk').addClass('home-alt');

			localStorage.setItem('refresh','');
		} else {
			$('.hero-blk').removeClass('home-alt');
			localStorage.setItem('refresh', 'once');
		}
		$scope.currtag = $routeParams.tag;

		angular.forEach(data, function(article) {
			$scope.currtag = $routeParams.tag;
			article.ctags = article.field_tags.toLowerCase().replace(/\s+/g, '-').split(',');
	        if (article.ctags.indexOf($routeParams.tag) > -1) {
				$scope.articles.push(article);

				var grid = $.UIkit.grid('.matrix', { /* options */ });

				$(window).resize();
	        } else {
				// $location.path('/');
	        }
	    });

	    
		
	});

});