(function () {
  'use strict';

  angular
    .module('app')
    .controller('PerguntaFormController', PerguntaFormController);

  PerguntaFormController.$inject = ['PerguntaService', '$location', '$routeParams', '$scope'];
  function PerguntaFormController(PerguntaService, $location, $routeParams, $scope) {
    var vm = this; 
    vm.pergunta = {};
    vm.titulo = 'Nova Pergunta';
    vm.opcao = null;
    var opcaoSelecionada = -1;
    vm.questionario = $routeParams.questionario;

    vm.salvar = salvar;
    vm.salvarAlternativa = salvarAlternativa;
    vm.adicionarAlternativa = adicionarAlternativa;
    vm.editarAlternativa = editarAlternativa;
    vm.removerAlternativa = removerAlternativa;

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
      vm.pergunta.questionario = vm.questionario;
      PerguntaService.save(vm.pergunta)
        .success(function () {
          $location.path(vm.pergunta.questionario+'/perguntas')
        })
    }

     function salvarAlternativa() {
      vm.pergunta.opcoes = vm.pergunta.opcoes || [];
      vm.pergunta.opcoes[opcaoSelecionada] = vm.opcao;
      opcaoSelecionada = -1;
      vm.opcao = null;
    }

    function adicionarAlternativa() {
      vm.opcao = {}
      vm.modalTitulo = 'Nova Alternativa';
      opcaoSelecionada = (vm.pergunta.opcoes && vm.pergunta.opcoes.length) || 0;
    }

    function editarAlternativa(opcao) {
      opcaoSelecionada = vm.pergunta.opcoes.indexOf(opcao);
      vm.modalTitulo = 'Editando Alternativa';
      vm.opcao = angular.copy(opcao);
    }

    function removerAlternativa(opcao) {
      confirmBox('Tem certeza que deseja remover a alternativa', function () {
        let pos = vm.pergunta.opcoes.indexOf(opcao);
        vm.pergunta.opcoes.splice(pos, 1);
        $scope.$apply();
      });
    }
  }
})();