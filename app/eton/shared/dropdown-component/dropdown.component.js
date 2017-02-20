(function() {
    'use strict';

    angular
        .module('eton')
        .component('dropdownComponent', {
            controller: dropdownComponentController,
            controllerAs: 'vm',
            templateUrl : 'shared/dropdown-component/dropdownComponentView.html',
            bindings: {
            	list:'<',
	            onSelect:'&'
            },
        });

	dropdownComponentController.$inject = [];

    /* @ngInject */
    function dropdownComponentController() {
        var vm = this;

        vm.$onInit = onInit;
        vm.onSelectEvent = onSelectEvent;

        ////////////////////

        function onInit(){

        }
        function onSelectEvent(item){
        	vm.onSelect({item: item});
        }
    }

})();


