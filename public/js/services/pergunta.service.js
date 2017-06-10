(function () {
  'use strict';

  angular
    .module('app')
    .factory('PerguntaService', PerguntaService);

  PerguntaService.$inject = ['$http'];
  function PerguntaService($http) {
    var service = {
      find: find,
      findById: findById,
      save: save,
      remove: remove
    };

    /*var URL = '/api/:questionario/perguntas';*/
    var URL = '/api/perguntas';

    return service;

    ////////////////
    function find(query) {
       return $http.get(URL, { params: { filter: JSON.stringify(query) } });
    }

    function findById(id) {
      return $http.get(URL + '/' + id);
    }

    function save(record) {
      if (record._id) {
        return $http.put(URL + '/' + record._id, record);
      } else {
        return $http.post(URL, record);
      }
    }

    function remove(id) {
      return $http.delete(URL + '/' + id);
    }
  }
})();