angular.module('jedi').filter('secureHtml', function($sce) {
	return function(input,arg) {
		return $sce.trustAsHtml(input);
	};
});