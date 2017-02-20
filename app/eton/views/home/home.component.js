(function() {
    'use strict';

    angular
        .module('eton')
        .component('homeComponent', {
            controller: homeComponentController,
            controllerAs: 'vm',
            templateUrl: '/views/home/homeComponentView.html' ,
            bindings: {},
        });

	homeComponentController.$inject = ['homeService'];

    /* @ngInject */
    function homeComponentController(homeService) {
        var vm = this;
        vm.products = [];
        vm.closets = [];

        vm.$onInit = onInit;
	    vm.queryObject = queryObject;

        ////////////////////
        function onInit(){
	        vm.queryObject('products',vm.products);
	        vm.queryObject('closets',vm.closets);
        }

	    function queryObject(object,vm){
		    homeService.query({object:object},function(response){
			    vm = response;
		    },function(err){
			    console.error(err);
		    })
	    }
    }
})();