(function() {
    'use strict';

    angular
        .module('eton')
        .component('footerComponent', {
            controller: footerComponentController,
            controllerAs: 'vm',
            templateUrl: 'footer-component/footerComponentView.html',
            bindings: {},
        });

	footerComponentController.$inject = [];

    /* @ngInject */
    function footerComponentController() {
        var vm = this;

        vm.$onInit = onInit;

        ////////////////////

        function onInit(){

        }
    }

})();


