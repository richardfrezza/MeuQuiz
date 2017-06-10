(function () {
  'use strict';

  angular
    .module('app')
    .controller('UsuarioListController', UsuarioListController);

  UsuarioListController.$inject = ['UsuarioService'];
  function UsuarioListController(UsuarioService) {
    var vm = this;
    vm.usuarios = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();
    
    
  function activate() {
      var query = vm.busca ? { titulo: vm.busca } : {}
      UsuarioService.find(query)
        .success(function (data) {
          vm.usuarios = data;
        });
    }

   function remover(usuario) {
     var nome = usuario.nome || "sem título";
      confirmBox('Deseja realmente remover o usuário "' + nome + '"', function () {
        UsuarioService.remove(usuario._id)
          .success(function () {
            activate();
          });
      });
   }

  }
})();