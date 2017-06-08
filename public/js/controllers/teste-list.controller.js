(function() {
'use strict';

    angular
        .module('app')
        .controller('TestListController', TestListController);

    
    function TestListController() {
        var vm = this;
        vm.richard = "oh deu certo";

        activate();

        ////////////////

        function activate() { }
    }
})();