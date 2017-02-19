(function() {
    'use strict';

    angular
        .module('eton')
        .component('headerComponent', {
            controller: headerComponentController,
            controllerAs: 'vm',
            templateUrl: 'header-component/headerComponentView.html',
            bindings: {},
        });

	headerComponentController.$inject = [];

    /* @ngInject */
    function headerComponentController() {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////////

        function onInit(){

        }
    }

})();


