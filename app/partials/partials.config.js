(function() {
    'use strict';

    angular
    .module('partials')
    .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('login', {
            url: '',
            templateUrl : 'partials/autenticacao/view/login.html',
            controller  : 'LoginController',
            controllerAs: 'vm'
        })
        .state('listacompras', {
            url: '/listacompras',
            templateUrl : 'partials/Listacompras/view/listacompras.html',
            controller  : 'ListaComprasController',
            controllerAs: 'vm'
        });
    }
})();
