(function () {
	'use strict';

	angular
		.module('eton')
		.config(routeConfig);

	routeConfig.$inject = ['$stateProvider'];

	function routeConfig($stateProvider){
		$stateProvider
			.state('eton', {
					url: '/',
					component: 'etonRootComponent',
					//adgroupPerformanceService : 'adgroupPerformanceService',
					/*resolve: {
						adgroup: function(adgroupPerformanceService,$stateParams){
							return adgroupPerformanceService.getAdgroup($stateParams.id).$promise;
						}
					}*/
				}
			)
	}
})()