(function() {
    'use strict';

    angular
        .module('eton')
        .component('etonRootComponent', {
            controller: etonRootComponentController,
            controllerAs: 'vm',
            templateUrl: 'etonRootView.html' ,
            bindings: {},
        });

	etonRootComponentController.$inject = [];

    /* @ngInject */
    function etonRootComponentController() {
        var vm = this;

        vm.$onInit = onInit;
        vm.$onChanges = onChanges;

        ////////////////////

        function onInit(){

        }

        function onChanges(changes){

        }
    }
})();


