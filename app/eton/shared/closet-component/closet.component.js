(function() {
    'use strict';

    angular
        .module('eton')
        .component('closetComponent', {
            controller: closetComponentController,
            controllerAs: 'vm',
            templateUrl : 'shared/closet-component/closetComponentView.html',
            bindings: {
            	closet:'<',
	            onClick:'&',
            },
        });

	closetComponentController.$inject = [];

    /* @ngInject */
    function closetComponentController() {
        var vm = this;

        vm.$onInit = onInit;
        vm.onClickEvent = onClickEvent;

        ////////////////////

        function onInit(){

        }

        function onClickEvent(){
            vm.onClick({closet: vm.closet});
        }
    }
})();

