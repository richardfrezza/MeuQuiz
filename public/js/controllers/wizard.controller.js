(function () {
  'use strict';

  angular
    .module('app')
    .controller('WizardController', WizardController);

  WizardController.$inject = ['$location','PerguntaService', '$routeParams']

  function WizardController($location,PerguntaService, $routeParams) {
    var vm = this;
    vm.steps = [];
    vm.model = {};
    vm.questionario = $routeParams.questionario;
    vm.gravar = gravar;
    vm.salvar = salvar;

    
    activate();

    ////////////////

function activate() {
      PerguntaService.find()
        .success(function (data) {
          vm.steps = data;
         
        });
    }

 function salvar(){
   alert('Teste salvar!!!');

 }

    function gravar() {
      $location.path('/');
    }
  }


})();