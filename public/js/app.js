(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
    'mgo-angular-wizard'
  ]).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];
  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/questionarios', {
        templateUrl: 'partials/questionario-list.html',
        controller: 'QuestionarioListController',
        controllerAs: 'vm'
      })
      .when('/questionarios/new', {
        templateUrl: 'partials/questionario-form.html',
        controller: 'QuestionarioFormController',
        controllerAs: 'vm'
      })
      .when('/questionarios/:id', {
        templateUrl: 'partials/questionario-form.html',
        controller: 'QuestionarioFormController',
        controllerAs: 'vm'
      })
      .when('/usuarios', {
        templateUrl: 'partials/usuario-list.html',
        controller: 'UsuarioListController',
        controllerAs: 'vm'
      })
      .when('/usuarios/new', {
        templateUrl: 'partials/usuario-form.html',
        controller: 'UsuarioFormController',
        controllerAs: 'vm'
      })
      .when('/usuarios/:id', {
        templateUrl: 'partials/usuario-form.html',
        controller: 'UsuarioFormController',
        controllerAs: 'vm'
      })
      .when('/:questionario/perguntas', {
        templateUrl: 'partials/pergunta-list.html',
        controller: 'PerguntaListController',
        controllerAs: 'vm'
      })
      .when('/:questionario/perguntas/new', {
        templateUrl: 'partials/pergunta-form.html',
        controller: 'PerguntaFormController',
        controllerAs: 'vm'
      })
      .when('/:questionario/perguntas/:id', {
        templateUrl: 'partials/pergunta-form.html',
        controller: 'PerguntaFormController',
        controllerAs: 'vm'
      })
      .when('/:questionario/perguntas/opcao/:id', {
        templateUrl: 'partials/pergunta-opcao-form.html',
        controller: 'PerguntaFormController',
        controllerAs: 'vm'
      })
       .when('/questionario/respostas/', {
        templateUrl: 'partials/resposta-questionario.html',
        controller: 'QuestionarioListController',
        controllerAs: 'vm'
      })
       .when('/:questionario/respostas/', {
        templateUrl: 'partials/wizard.html',
        controller: 'WizardController',
        controllerAs: 'vm'
      })
       .when('/resultadosUsuarios/', {
        templateUrl: 'partials/resultado-usuario-list.html',
        controller: 'UsuarioResultadoListController',
        controllerAs: 'vm'
      })
       .when('/resultadosUsuarios/:id', {
        templateUrl: 'partials/resultado-usuario-respostas.html',
        controller: 'UsuarioResultadoRespostasListController',
        controllerAs: 'vm'
      })

      
      .otherwise('/');
  }
})();