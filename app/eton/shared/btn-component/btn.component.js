(function() {
    'use strict';

    angular
        .module('eton')
        .component('btnComponent', {
            controller: btnComponentController,
            controllerAs: 'vm',
            templateUrl : '/shared/btn-component/btnComponentView.html' ,
            bindings: {
				label:'@',
	            onClick:'&'
            },
        });

	btnComponentController.$inject = [];

    /* @ngInject */
    function btnComponentController() {
        var vm = this;

        vm.$onInit = onInit;
        vm.onClickEvent = onClickEvent;

        ////////////////////

        function onInit(){

        }

        function onClickEvent(){
			vm.onClick({'btn': vm.label})
        }
    }

})();


