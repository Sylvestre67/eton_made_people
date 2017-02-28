(function () {
	'use strict';

	angular
		.module('eton')
		.config(routeConfig);

	routeConfig.$inject = ['$stateProvider'];

	function routeConfig($stateProvider){
		$stateProvider
			.state('home', {
					url: '',
					component: 'homeComponent',
				}
			)
	}
})();