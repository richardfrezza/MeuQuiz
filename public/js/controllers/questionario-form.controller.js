(function () {
  'use strict';

  angular
    .module('app')
    .controller('QuestionarioFormController', QuestionarioFormController);

  QuestionarioFormController.$inject = ['QuestionarioService', '$location', '$routeParams'];
  function QuestionarioFormController(QuestionarioService, $location, $routeParams) {
    var vm = this;
    vm.questionario = {};
    vm.titulo = 'Novo Questionário';

    vm.salvar = salvar;

    activate();
    
    function activate() {
      if ($routeParams.id) {
        QuestionarioService.findById($routeParams.id)
          .success(function (data) {
            vm.questionario = data;
            vm.titulo = 'Editando Questionário'
          });
      }
    }

    function salvar() {
      QuestionarioService.save(vm.questionario)
        .success(function () {
          $location.path('/questionarios')
        })
    }
  }
})();