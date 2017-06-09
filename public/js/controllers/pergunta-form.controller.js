(function () {
  'use strict';

  angular
    .module('app')
    .controller('PerguntaFormController', PerguntaFormController);

  PerguntaFormController.$inject = ['PerguntaService', '$location', '$routeParams'];
  function PerguntaFormController(PerguntaService, $location, $routeParams) {
    var vm = this;
    vm.perguntas = {};
    vm.titulo = 'Nova Pergunta';

    vm.salvar = salvar;

    activate();
    
    function activate() {
      if ($routeParams.id) {
        PerguntaService.findById($routeParams.id)
          .success(function (data) {
            vm.pergunta = data;
            vm.titulo = 'Editando Pergunta'
          });
      }
    }

    function salvar() {
      PerguntaService.save(vm.pergunta)
        .success(function () {
          $location.path('/perguntas')
        })
    }
  }
})();