(function() {
    'use strict';

    angular
        .module('partials')
        .controller('LoginController', LoginController);

    /* @ngInject */
    function LoginController($state, $location, SessionAuth) {

        var vm = this;
        (function init() {
            addEvents();
        })();

        function addEvents() {
			vm.form         = new Object();
            vm.onClickLogar = onClickLogar;
            vm.returnSucess = returnSucess;
        }

        function onClickLogar() {
			SessionAuth.setCredentials(vm.form, returnSucess);
        }

        function returnSucess(returnAutenticacao) {
            if (returnAutenticacao) {
                $state.go('listacompras');
            }
        }
    }
})();
