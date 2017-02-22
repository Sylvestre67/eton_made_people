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
	    vm.listOfCountries = [{name:'sweden',code:'se'},
		    {name:'france',code:'fr'},
		    {name:'greece',code:'gr'},
		    {name:'germany',code:'ge'}];

	    vm.$onInit = onInit;
	    vm.updateCountry = updateCountry;

        ////////////////////

        function onInit(){
	        vm.selectedCountry = vm.listOfCountries[0];
        }

        function updateCountry(country){
	        vm.selectedCountry = country;
        }
    }
})();


