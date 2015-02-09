angular.module('articles').filter('secureHtml', function($sce) {
	return function(input,arg) {
		return $sce.trustAsHtml(input);
	};
});