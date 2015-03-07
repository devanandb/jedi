angular.module('articles').controller('DetailCtrl',function($scope, $http, $routeParams, $location){

	// databank.query(function(data) {
	// 	$scope.articles = [];
	// 	var regex = /<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/;
	// 	angular.forEach(data, function(article) {
	// 		article.ctags = article.field_tags.toLowerCase().replace(/\s+/g, '-').split(',');
	//         if (article.nid === $routeParams.id) {
	// 			article.field_hero_image = regex.exec(article.field_hero_image);
	// 			$scope.article = article;
	//         } else {
	//         }
	//     });

	//     if(!$scope.article) {
	//     }
		
	// });
	var regex = /<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/;
	$http.get('http://cms.designjedi.co/api/article/' + $routeParams.id).
	  success(function(data, status, headers, config) {

		angular.forEach(data, function(article) {
			article.ctags = article.field_tags.toLowerCase().replace(/\s+/g, '-').split(',');
			article.field_hero_image = regex.exec(article.field_hero_image);
			$scope.article = article;
		});

	    
	  }).
	  error(function(data, status, headers, config) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });
});