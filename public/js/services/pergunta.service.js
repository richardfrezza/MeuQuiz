(function () {
  'use strict';

  angular
    .module('app')
    .factory('PerguntaService', PerguntaService);

  PerguntaService.$inject = ['$http','$routeParams'];
  function PerguntaService($http,$routeParams) {
    var service = {
      find: find,
      findById: findById,
      save: save,
      remove: remove,
      
    };

          
    return service;

    ////////////////
    function find(query) {
      URL = $routeParams.questionario ? '/api/'+$routeParams.questionario+'/perguntas':'/api/perguntas';
      return $http.get(URL, { params: { filter: JSON.stringify(query) } });
    }

    function findById(id) {
      return $http.get('/api/perguntas/' + id);
    }

    function save(record) {
      if (record._id) {
        return $http.put('/api/perguntas/' + record._id, record);
      } else {
        return $http.post('/api/perguntas', record);
      }
    }

    function remove(id) {
      return $http.delete('/api/perguntas/' + id);
    }
  }
})();