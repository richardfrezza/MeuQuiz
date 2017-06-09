(function () {
  'use strict';

  angular
    .module('app')
    .controller('PerguntaListController', PerguntaListController);

  PerguntaListController.$inject = ['PerguntaService'];
  function PerguntaListController(PerguntaService) {
    var vm = this;
    vm.perguntas = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();
    
    
  function activate() {
      var query = vm.busca ? { titulo: vm.busca } : {}
      PerguntaService.find(query)
        .success(function (data) {
          vm.perguntas = data;
        });
    }

   function remover(pergunta) {
     var titulo = pergunta.titulo || "sem título";
      confirmBox('Deseja realmente remover a pergunta "' + titulo + '"', function () {
        PerguntaService.remove(pergunta._id)
          .success(function () {
            activate();
          });
      });
   }

  }
})();