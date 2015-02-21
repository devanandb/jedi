angular.module('pages').controller('HomealtCtrl',function($scope, categoryService){

	categoryService.query(function(data) {
		var regex = /<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/;
		$scope.categories = [];
		angular.forEach(data, function(category) {

			category.field_hero_image = regex.exec(category.field_hero_image);
			
			$scope.categories.push(category);
		});


	});

	
});