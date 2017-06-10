(function () {
  'use strict';

  angular
    .module('app')
    .controller('PerguntaListController', PerguntaListController);

  PerguntaListController.$inject = ['PerguntaService', '$routeParams'];
  function PerguntaListController(PerguntaService, $routeParams) {
    var vm = this;
    vm.perguntas = [];
    vm.busca = ''
    vm.questionario = $routeParams.questionario;
    
    vm.remover = remover;
    vm.buscar = activate;
    //alert(vm.questionario);
    activate();   

  function activate() {
      var query = vm.busca ? {titulo: vm.busca, questionario: vm.questionario} : {questionario: vm.questionario};
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