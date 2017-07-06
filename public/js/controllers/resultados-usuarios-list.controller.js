(function () {
  'use strict';

  angular
    .module('app')
    .controller('UsuarioResultadoListController', UsuarioResultadoListController);

  UsuarioResultadoListController.$inject = ['RespostaService'];
  function UsuarioResultadoListController(RespostaService) {
    var vm = this;
    vm.respostas = [];
    vm.busca = ''

    vm.buscar = activate;

    activate();
    
    
  function activate() {
      var query = vm.busca ? { 'usuario.nome': vm.busca } : {}
      RespostaService.find(query)
        .success(function (data) {
          vm.respostas = data;
        });
    }
  }
})();