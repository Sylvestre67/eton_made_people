(function() {
    'use strict';

    angular
        .module('eton')
        .component('homeComponent', {
            controller: homeComponentController,
            controllerAs: 'vm',
            templateUrl: '/views/homeComponentView.html' ,
            bindings: {

            },
        });

	homeComponentController.$inject = [];

    /* @ngInject */
    function homeComponentController() {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////////
        function onInit(){

        }
    }

})();


