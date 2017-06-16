(function () {
  'use strict';

  angular
    .module('app')
    .controller('WizardController', WizardController);

  WizardController.$inject = ['$location','PerguntaService','RespostaService', '$routeParams']

  function WizardController($location,PerguntaService,RespostaService, $routeParams) {
    var vm = this;
    vm.resposta = {};
    vm.resposta.respostas = [];
    
    vm.resposta.usuario =  "593762f2a32c2720cc5b09e7"; //contexto
    vm.resposta.questionario =  $routeParams.questionario; //uri
    vm.resposta.peso = null;
    vm.pergunta = {};
    vm.pergunta._id = null;
    vm.pergunta.titulo = null;;
    vm.pergunta.peso = null;
    vm.resposta.respostas.opcao = {};
    var opcaoSelecionada = -1;

    vm.gravar = gravar;
    vm.salvar = salvar;
    vm.alternativa = null;

    
    activate();

    ////////////////

    function activate() {
        PerguntaService.find()
          .success(function (data) {
            vm.perguntas = data;
       
          });
    }

    function salvar(pergunta, alternativa){
  
      vm.resposta.respostas = [];
      opcaoSelecionada = (vm.resposta.respostas && vm.resposta.respostas.length) || 0; // pega tamhando atual do array
      vm.pergunta._id = pergunta._id;
      vm.pergunta.titulo = pergunta.titulo;
      vm.pergunta.peso = pergunta.peso;
         
      vm.resposta.respostas[opcaoSelecionada] = vm.pergunta;
    
      vm.alternativa = null;
      opcaoSelecionada = -1;
    }

    function gravar() {
         
      RespostaService.save(vm.respostas)
        .success(function () {
         $location.path('/');
        })
    }


    
  }


})();