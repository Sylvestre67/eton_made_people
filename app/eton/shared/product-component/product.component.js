(function() {
	'use strict';

	angular
		.module('eton')
		.component('productComponent', {
			controller: productComponentController,
			controllerAs: 'vm',
			templateUrl : 'shared/product-component/productComponentView.html',
			bindings: {
				product:'<',
				onClick:'&',
			},
		});

	productComponentController.$inject = [];

	/* @ngInject */
	function productComponentController() {
		var vm = this;

		vm.$onInit = onInit;
		vm.onClickEvent = onClickEvent;

		////////////////////

		function onInit(){

		}

		function onClickEvent(){
			vm.onClick({product: vm.product});
		}
	}
})();


