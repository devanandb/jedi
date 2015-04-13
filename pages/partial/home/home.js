angular.module('pages').controller('HomeCtrl',function($scope, categoryService){

	
	categoryService.query(function(data) {
		var regex = /<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/;
		$scope.categories = [];
		angular.forEach(data, function(category) {

			category.field_hero_image = regex.exec(category.field_hero_image);
			
			$scope.categories.push(category);
		});
		
	});

	if (localStorage.getItem('refresh') === 'once') {
		console.log('alternate');
		$('.hero-blk').addClass('home-alt');

		localStorage.setItem('refresh','');
	} else {
		$('.hero-blk').removeClass('home-alt');
		localStorage.setItem('refresh', 'once');
	}

	
    

});