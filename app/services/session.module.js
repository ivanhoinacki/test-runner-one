(function() {
    'use strict';

    angular
        .module('app')
        .service('SessionAuth', SessionAuth);

    /* @ngInject */
    function SessionAuth($http, $filter, $cookieStore, $rootScope, $timeout, UserService) {

        function _setCredentials(data, callback) {

			UserService.createUser(data);

            $rootScope.globals = {
                currentUser: {
                    username: data.usuario,
                    authdata: data.senha + 'PSADFPAOSKDFPOKSADPFOKS',
                    data: data
                }
            };

            $cookieStore.put('globals', $rootScope.globals);
            return callback($rootScope.globals);
        };

        function _clearCredentials() {
            delete $rootScope.globals;
            $cookieStore.remove('globals');
        };

        return {
            setCredentials: _setCredentials,
            clearCredentials: _clearCredentials
        };
    }

})();
