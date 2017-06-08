(function () {
  'use strict';

  angular
    .module('app')
    .controller('QuestionarioListController', QuestionarioListController);

  QuestionarioListController.$inject = ['QuestionarioService']
  function QuestionarioListController() {
    var vm = this;
    vm.questionarios = [];
    vm.busca = ''

    //vm.remover = remover;
    vm.buscar = activate;

    activate();

    function activate() { }

    ////////////////

    /* function activate() {
      var query = vm.busca ? { titulo: vm.busca } : {}
      QuestionarioService.find(query)
        .success(function (data) {
          vm.questionarios = data;
        });
    }

   function remover(questionario) {
      confirmBox('Deseja realmente remover o questionário "' + questionario.titulo + '"', function () {
        QuestionarioService.remove(questionario._id)
          .success(function () {
            activate();
          });
      });
   }*/

  }
})();