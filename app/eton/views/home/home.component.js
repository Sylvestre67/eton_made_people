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

        vm.$onInit = onInit;
	    vm.queryObject = queryObject;

        ////////////////////
        function onInit(){
	        vm.queryObject('products');
	        vm.queryObject('closets');
        }

	    function queryObject(object){
		    homeService.query({object:object},function(response){
			    vm[object] = response;
		    },function(err){
			    console.error(err);
		    })
	    }
    }
})();