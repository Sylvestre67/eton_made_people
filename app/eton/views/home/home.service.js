(function () {
	'use strict';

	angular
		.module('eton')
		.service('homeService', homeService);

	homeService.$inject = ['$resource'];

	/* @ngInject */
	function homeService($resource) {
		return $resource('/:object.json',{})
	}

})();


