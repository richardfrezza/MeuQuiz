(function() {
'use strict';

    angular
        .module('app')
        .controller('TesteController', TesteController);

    function TesteController() {
        var vm = this;
        vm.richard = 'Olá aqui está tudo bem!'
        activate();

        ////////////////

        function activate() { }
    }
})();