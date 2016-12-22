(function() {
    'use strict';

    angular
        .module('partials')
        .controller('ListaComprasController', ListaComprasController);

    /* @ngInject */
    function ListaComprasController($state, $location, ListaComprasService) {

        var vm = this;
        (function init() {
            vm.onClickAddItem = onClickAddItem;
            vm.onClickExcluir = onClickExcluir;
            vm.onClickEditar = onClickEditar;
            vm.listaTarefa = ListaComprasService.getListaCompras();
			console.log(vm.listaTarefa);
        })();

        function onClickAddItem() {
            vm.listaTarefa.push({
                descricao: vm.itemDescricao,
                concluido: true
            });
            vm.itemDescricao = '';
        };

        function onClickEditar(id, listacompras) {
            vm.listaTarefa = listacompras.filter(function(compras, key) {
                if (id !== key) {
                    return compras;
                }
                vm.itemDescricao = compras.descricao;
            });
        }

        function onClickExcluir(listacompras) {
            vm.listaTarefa = listacompras.filter(function(compras) {
                if (!compras.selecionado)
                    return compras;
            });
        }
    }
})();
