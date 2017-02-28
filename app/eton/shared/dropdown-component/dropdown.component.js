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

	dropdownComponentController.$inject = ['$window'];

    /* @ngInject */
    function dropdownComponentController($window) {
        var vm = this;
	    vm.showMenu = false;

        vm.$onInit = onInit;
        vm.onSelectEvent = onSelectEvent;
        vm.$onDestroy = onDestroy;

        ////////////////////
        function onInit(){
        	// Select the first item of the list by default if item is not provided
	        (!vm.item) ? vm.item = vm.list[0] : false;
	        $window.addEventListener('click', hideMenu.bind(vm), false);
        }

        function onSelectEvent(item){
	        vm.item = item;
        	vm.onSelect({item: item});
	        vm.showMenu = false;
        }

	    function hideMenu(e){
		    (this.showMenu) ? this.showMenu = false : false;
	    }

	    function onDestroy(){
		    $window.removeEventListener('click', hideMenu, false);
	    }

    }

})();


