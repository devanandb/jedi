angular.module('jedi').factory('categoryService',function($resource) {

	return $resource('http://cms.designjedi.co/api/categories');
});