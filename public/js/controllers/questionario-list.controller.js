(function () {
  'use strict';

  angular
    .module('app')
    .controller('QuestionarioListController', QuestionarioListController);

  QuestionarioListController.$inject = ['QuestionarioService'];
  function QuestionarioListController(QuestionarioService) {
    var vm = this;
    vm.questionarios = [];
    vm.busca = ''

    vm.remover = remover;
    vm.buscar = activate;

    activate();
    
    
  function activate() {
      var query = vm.busca ? { titulo: vm.busca } : {}
      QuestionarioService.find(query)
        .success(function (data) {
          vm.questionarios = data;
        });
    }

   function remover(questionario) {
     var titulo = questionario.titulo || "sem título";
      confirmBox('Deseja realmente remover o questionário "' + titulo + '"', function () {
        QuestionarioService.remove(questionario._id)
          .success(function () {
            activate();
          });
      });
   }

  }
})();