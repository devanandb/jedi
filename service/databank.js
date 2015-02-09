angular.module('jedi').factory('databank',function($resource) {

	return $resource('http://cms.designjedi.co/api/articles');

});