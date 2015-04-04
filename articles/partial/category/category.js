angular.module('articles').controller('CategoryCtrl',function($scope, $http, $routeParams, $location){


	window.scope = $scope;
	$scope.articles = [];
	
	if (localStorage.getItem('refresh') == 'once') {
		console.log('alternate');
		$('.hero-blk').addClass('home-alt');

		localStorage.setItem('refresh','');
	} else {
		$('.hero-blk').removeClass('home-alt');
		localStorage.setItem('refresh', 'once');
	}
	// categoryService.query(function(data) {

	// 	var regex = /<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/;
	// 	angular.forEach(data, function(category) {
			
	//         if (category.title === $routeParams.category) {
	// 			category.field_hero_image = regex.exec(category.field_hero_image);
	// 			$scope.category = category;
	//         }
	//     });
	// });

	// databank.query(function(data) {
	// 	$scope.articles = [];

	// 	angular.forEach(data, function(article) {
	// 		article.ctags = article.field_tags.toLowerCase().replace(/\s+/g, '-').split(',');
	//         if (article.field_category === $routeParams.category) {
	// 			$scope.articles.push(article);
	//         } else {
	// 			// $location.path('/');
	//         }
	//     });

	//     console.log($scope.articles);
	//     var $container = $('.matrix');

	//     $container.imagesLoaded( function() {
	        
	//          $container.masonry({
 //              columnWidth: '.uk-width-medium-1-2',
 //              itemSelector: '.each-card'
 //            });

	//     });

	    
	// });

	var regex = /<img.+src\=(?:\"|\')(.+?)(?:\"|\')(?:.+?)\>/;

	$http.get('http://cms.designjedi.co/api/categories/' + $routeParams.category).
		success(function(data, status, headers, config){
			angular.forEach(data, function(category) {
				category.field_hero_image = regex.exec(category.field_hero_image);
				$scope.category = category;
			});
		});

	$http.get('http://cms.designjedi.co/api/category/' + $routeParams.category).
		success(function(data, status, headers, config){
			angular.forEach(data, function(article){
				article.ctags = article.field_tags.toLowerCase().replace(/\s+/g, '-').split(',');
				article.field_order = parseInt(article.field_order);
				$scope.articles.push(article);

				var grid = UIkit.grid('.matrix', { /* options */ });

				$(window).resize();

				// var $container = $('.matrix');
				// $container.imagesLoaded( function() {
				// 	$container.isotope({
				// 		itemSelector: '.each-card',
				// 		masonry: {
				// 		  columnWidth: '.uk-width-medium-1-2'
				// 		}
				// 	});
				// });




			});



		})
		.error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
		});




		// $('.flip').hover(function(){
	 //        $(this).find('.card').addClass('flipped').mouseleave(function(){
	 //            $(this).removeClass('flipped');
	 //        });
	 //        return false;
	 //    });

	    
	
});