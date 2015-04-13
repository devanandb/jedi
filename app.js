angular.module('jedi', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'ngResource', 'angular-loading-bar', 'ngReadingTime', 'pages', 'articles', 'viewhead']);

angular.module('jedi').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/'});

});

angular.module('jedi').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});

