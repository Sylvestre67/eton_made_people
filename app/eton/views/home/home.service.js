(function () {
	'use strict';

	angular
		.module('eton')
		.service('homeService', homeService);

	homeService.$inject = ['$resource'];

	/* @ngInject */
	function homeService($resource) {
		this.getObject = getObject;

		////////////////

		function getObject() {
			return $resource('/mocked_api/:object.json',{})
		}
	}

})();


