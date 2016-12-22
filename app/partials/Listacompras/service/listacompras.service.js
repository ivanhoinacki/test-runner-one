(function() {
    'use strict';

    angular
        .module('partials')
        .factory('ListaComprasService', ListaComprasService);

    function ListaComprasService() {

        function _getListaCompras() {
            var listaCompra = [{
                descricao: 'Estudar AngularJS',
                concluido: true
            }, {
                descricao: 'Estudar testes utilizando Protractor',
                concluido: true
            }];
            return listaCompra;
        }

        return {
            getListaCompras: _getListaCompras
        }
    }
})();
