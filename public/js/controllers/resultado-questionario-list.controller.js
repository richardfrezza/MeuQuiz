(function () {
  'use strict';

  angular
    .module('app')
    .controller('ResultadoQuestionarioListController', ResultadoQuestionarioListController);

  ResultadoQuestionarioListController.$inject = ['RespostaService','$location', '$routeParams'];
  function ResultadoQuestionarioListController(RespostaService, $location, $routeParams) {
    var vm = this;
    vm.respostas = [];
    vm.busca = '';
    alert($routeParams.questionario);
    vm.buscar = activate;

    activate();
        
  function activate() {
      var query = $routeParams.questionario ? { 'questionario._id': $routeParams.questionario } : {}
      RespostaService.find(query)
        .success(function (data) {
          vm.respostas = data;
        });
    }
  }
})();