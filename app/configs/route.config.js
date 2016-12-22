(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig)
        .run(run);

    /* @ngInject */
    function routeConfig($stateProvider, $httpProvider, $urlRouterProvider) {

		$urlRouterProvider.when('', '');
        $urlRouterProvider.otherwise('');
    }

    function run($rootScope, $state, $location, $cookieStore, $http, $window) {
        // manter usuário logado após página de atualização
        $rootScope.globals = $cookieStore.get('globals') || {};
        $rootScope.$on('$locationChangeStart', function(event, next, current) {
            var restrictedPage = $location.path() === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $window.location.href = 'http://localhost:3000';
            }
        });
    }
})();
