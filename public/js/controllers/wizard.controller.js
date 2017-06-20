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
    vm.resposta.pontuacao = null;
      
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
      
      opcaoSelecionada = (vm.resposta.respostas && vm.resposta.respostas.length) || 0; // pega tamhando atual do array
      vm.resposta.respostasModelo = [];
      vm.resposta.respostasModelo.pergunta = {};
      vm.resposta.respostasModelo.opcao = {};
      vm.resposta.respostasModelo.pergunta._id = pergunta._id;
      vm.resposta.respostasModelo.pergunta.titulo = pergunta.titulo;
      vm.resposta.respostasModelo.pergunta.peso = pergunta.peso;
      vm.resposta.respostasModelo.opcao = JSON.parse(alternativa); //faz parse do json para o objeto
         
      vm.resposta.respostas[opcaoSelecionada] = vm.resposta.respostasModelo;
    
      vm.alternativa = null;
      opcaoSelecionada = -1; //reinicia index
      var teste = JSON.stringify(vm.resposta); 
      alert(teste);
    }

    function gravar() {
      delete vm.resposta.respostasModelo;  //limpa o objeto com propriedade desnecessária
      RespostaService.save(vm.resposta)
        .success(function () {
          alert('salvou !!!');
         $location.path('/');
        })
    }


    
  }


})();