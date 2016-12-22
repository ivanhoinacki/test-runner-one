(function() {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    function UserService($rootScope, $q, $http) {

        /**
         * Create a new user
         * @param {Object} data
         * @param {String} token
         * @returns {promise}
         */

        var _baseUrl = '/api/v1/user/';

        var _createUser = function(data, token) {
            var _deferred = $q.defer();

            var config = {
                params: data,
                headers: {
                    'Auth-Token': token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            $http.post(_baseUrl + 'create', config)
                .success(function(data) {
                    _deferred.resolve(data);
                })
                .error(function(error, status) {
                    _deferred.reject(error);
                });

            return _deferred.promise;
        };

        /**
         * Change password
         * @param {Object} data
         * @param {String} token
         * @returns {promise}
         */
        var _changePassword = function(data, token) {
            var deferred = $q.defer();

            var config = {
                params: data,
                headers: {
                    'Auth-Token': token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            $http.post(_baseUrl + 'change-password', config)
                .success(function(data) {
                    _deferred.resolve(data);
                })
                .error(function(error, status) {
                    _deferred.reject(error);
                });

            return _deferred.promise;
        };

        return {
            createUser: _createUser,
            changePassword: _changePassword
        };
    }
})();
