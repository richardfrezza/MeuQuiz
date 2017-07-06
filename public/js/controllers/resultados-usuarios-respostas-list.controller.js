(function () {
  'use strict';

  angular
    .module('app')
    .controller('UsuarioResultadoRespostasListController', UsuarioResultadoRespostasListController);

  UsuarioResultadoRespostasListController.$inject = ['RespostaService','$location', '$routeParams'];
  function UsuarioResultadoRespostasListController(RespostaService,$location, $routeParams) {
    var vm = this;
    vm.respostas = {};
    vm.titulo = 'Sem descrição';
    vm.buscar = activate;

    activate();
    
  function activate() {
      if ($routeParams.id) {
        RespostaService.findById($routeParams.id)
          .success(function (data) {
            vm.respostas = data;
            vm.respostas.pontuacao = !vm.respostas.pontuacao ? 0 : vm.respostas.pontuacao;
          });
      }
    }
  }
})();