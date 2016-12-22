'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Lista de compras controller', function() {


    it('deve validar a quantidade de itens da lista', function() {
        browser.get('http://localhost:3000/#/listacompras');
        var listaTarefa = element.all(by.repeater('(key, item) in vm.listaTarefa'));
        expect(listaTarefa.count()).toEqual(2);
    });

    it('deve adicionar um item na lista', function() {
        var itemDescricao = element(by.model('vm.itemDescricao')),
            listaTarefa = element.all(by.repeater('(key, item) in vm.listaTarefa'));

        itemDescricao.sendKeys('Criando um item novo na lista');
        element(by.model('vm.adicionarItem')).click();

        expect(itemDescricao.getAttribute('value')).toEqual('');
        expect(listaTarefa.count()).toEqual(3);
        expect(listaTarefa.get(2).element(by.tagName('label')).getText()).toEqual('Criando um item novo na lista');
    });

    it('deve adicionar um item na lista com o botão enter', function() {
        var itemDescricao = element(by.model('vm.itemDescricao')),
            listaTarefa = element.all(by.repeater('(key, item) in vm.listaTarefa'));

        itemDescricao.sendKeys('Desenhar um objeto').sendKeys(protractor.Key.ENTER);

        expect(itemDescricao.getAttribute('value')).toEqual('');
        expect(listaTarefa.count()).toEqual(4);
        expect(listaTarefa.get(3).element(by.tagName('label')).getText()).toEqual('Desenhar um objeto');
    });
});
