describe('secureHtml', function() {

	beforeEach(module('jedi'));

	it('should ...', inject(function($filter) {

        var filter = $filter('secureHtml');

		expect(filter('input')).toEqual('output');

	}));

});