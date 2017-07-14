(function () {
  'use strict';

  angular
    .module('app')
    .controller('WizardController', WizardController);

  WizardController.$inject = ['$location','PerguntaService','RespostaService', '$routeParams', 'UsuarioService']

  function WizardController($location,PerguntaService,RespostaService, $routeParams, UsuarioService) {
    var vm = this;
    vm.resposta = {};
    vm.resposta.respostas = [];
       
    vm.resposta.questionario =  $routeParams.questionario; //uri
    vm.resposta.pontuacao = null;
      
    var opcaoSelecionada = -1;

    vm.gravar = gravar;
    vm.salvar = salvar;
    vm.insereUsuario = insereUsuario;
    vm.alternativa = null;

    
    activate();

    ////////////////

    function activate() {
        PerguntaService.find()
          .success(function (data) {
            vm.perguntas = data;
        });
        UsuarioService.find()
          .success(function (data) {
            vm.usuarios = data;
        });

    }

    function salvar(pergunta, alternativa){
      
      opcaoSelecionada = (vm.resposta.respostas && vm.resposta.respostas.length) || 0; // pega tamhando atual do array
      let respostasModelo = {};
      respostasModelo.pergunta = {};
      respostasModelo.opcao = {};
      respostasModelo.pergunta._id = pergunta._id;
      respostasModelo.pergunta.titulo = pergunta.titulo;
      respostasModelo.pergunta.peso = pergunta.peso;
      respostasModelo.opcao = alternativa;
      
      vm.resposta.pontuacao += pergunta.peso*alternativa.peso;
      vm.resposta.respostas.push(respostasModelo);
      vm.alternativa = null;
    
  }

    function gravar() {
    RespostaService.save(vm.resposta)
        .success(function () {
         $location.path('/');
        })
    }

    function insereUsuario(usuario){
      vm.resposta.usuario = usuario._id;
    }
    
  }


})();