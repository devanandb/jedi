angular.module('articles').controller('DetailCtrl',function($scope, databank, $routeParams, $location){

	databank.query(function(data) {
		$scope.articles = [];

		angular.forEach(data, function(article) {
			article.ctags = article.field_tags.replace(/\s+/g, '-').split(',');
	        if (article.nid === $routeParams.id) {
				$scope.article = article;
	        } else {
				// $location.path('/');
	        }
	    });

	    if(!$scope.article) {
	    	$location.path('/');
	    }
		
	});
});