(function () {
  'use strict';

  angular
    .module('app')
    .controller('UsuarioFormController', UsuarioFormController);

  UsuarioFormController.$inject = ['UsuarioService', '$location', '$routeParams'];
  function UsuarioFormController(UsuarioService, $location, $routeParams) {
    var vm = this;
    vm.usuario = {};
    vm.titulo = 'Novo Usuário';

    vm.salvar = salvar;

    activate();
    
    function activate() {
      if ($routeParams.id) {
        UsuarioService.findById($routeParams.id)
          .success(function (data) {
            vm.usuario = data;
            vm.titulo = 'Editando Usuário'
          });
      }
    }

    function salvar() {
      UsuarioService.save(vm.usuario)
        .success(function () {
          $location.path('/usuarios')
        })
    }
  }
})();