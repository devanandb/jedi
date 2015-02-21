angular.module('articles').controller('DetailCtrl',function($scope, databank, $routeParams, $location){

	databank.query(function(data) {
		$scope.articles = [];
		var regex = /<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/;
		angular.forEach(data, function(article) {
			article.ctags = article.field_tags.toLowerCase().replace(/\s+/g, '-').split(',');
	        if (article.nid === $routeParams.id) {
				article.field_hero_image = regex.exec(article.field_hero_image);
				$scope.article = article;
	        } else {
				// $location.path('/');
	        }
	    });

	    if(!$scope.article) {
			// $location.path('/');
	    }
		
	});
});