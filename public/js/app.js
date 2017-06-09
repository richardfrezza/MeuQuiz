(function() {
  'use strict';

  angular.module('app', [
    'ngRoute',
    'ui.bootstrap'
  ]).config(AppConfig);

  AppConfig.$inject = ['$routeProvider'];
  function AppConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/clientes', {
        templateUrl: 'partials/cliente-list.html',
        controller: 'ClienteListController',
        controllerAs: 'vm'
      })
      .when('/clientes/new', {
        templateUrl: 'partials/cliente-form.html',
        controller: 'ClienteFormController',
        controllerAs: 'vm'
      })
      .when('/clientes/:id', {
        templateUrl: 'partials/cliente-form.html',
        controller: 'ClienteFormController',
        controllerAs: 'vm'
      })
      .when('/pedidos', {
        templateUrl: 'partials/pedido-list.html',
        controller: 'PedidoListController',
        controllerAs: 'vm'
      })
      .when('/pedidos/new', {
        templateUrl: 'partials/pedido-form.html',
        controller: 'PedidoFormController',
        controllerAs: 'vm'
      })
      .when('/pedidos/:id', {
        templateUrl: 'partials/pedido-form.html',
        controller: 'PedidoFormController',
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
       .when('/:questionario/perguntas', {
        templateUrl: 'partials/pergunta-list.html',
        controller: 'PerguntaListController',
        controllerAs: 'vm'
      })
      .when('/perguntas', {
        templateUrl: 'partials/pergunta-list.html',
        controller: 'PerguntaListController',
        controllerAs: 'vm'
      })
      .when('/:questionario/perguntas/new', {
        templateUrl: 'partials/pergunta-form.html',
        controller: 'PerguntaFormController',
        controllerAs: 'vm'
      })
       .when('/perguntas/new', {
        templateUrl: 'partials/pergunta-form.html',
        controller: 'PerguntaFormController',
        controllerAs: 'vm'
      })
      .when('/perguntas/:id', {
        templateUrl: 'partials/pergunta-form.html',
        controller: 'PerguntaFormController',
        controllerAs: 'vm'
      })
      .otherwise('/');
  }
})();