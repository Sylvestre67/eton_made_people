(function() {
    'use strict';

    angular
        .module('eton')
        .component('dropdownComponent', {
            controller: dropdownComponentController,
            controllerAs: 'vm',
	        transclude: {
		        item:'ddItem',
		        menu:'ddMenu',
	        },
            templateUrl : 'shared/dropdown-component/dropdownComponentView.html',
            bindings: {
            	list:'<',
	            item:'<',
	            onSelect:'&'
            },
        });

	dropdownComponentController.$inject = ['$window','$document'];

    /* @ngInject */
    function dropdownComponentController($window,$document) {
        var vm = this;
	    vm.showMenu = false;

        vm.$onInit = onInit;
        vm.onSelectEvent = onSelectEvent;

        ////////////////////
        function onInit(){
        	// Select the first item of the list by default if item is not provided
	        (!vm.item) ? vm.item = vm.list[0] : false;
        }

        function onSelectEvent(item){
	        vm.item = item;
        	vm.onSelect({item: item});
        }
    }
})();


