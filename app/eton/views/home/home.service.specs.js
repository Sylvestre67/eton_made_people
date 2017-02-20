describe("Service: perfChannelsServices", function () {

	beforeEach(module('eton'));

	beforeEach(function () {
		installPromiseMatchers();
	});

	var homeService,$rootScope,$httpBackend,$q,list;

	beforeEach(inject(function(_homeService_,_$q_,_$rootScope_,_$httpBackend_) {
		$rootScope = _$rootScope_;
		$q = _$q_;
		list = [
			{ "id":1,
				"name":"solid black dress shirt",
				"price":1295,
				"thumbnail":"",
				"cut":"slim fit"
			},
			{ "id":2,
				"name":"blue indingo casual shirt",
				"price":1295,
				"thumbnail":"",
				"cut":"super slim fit"
			},
			{ "id":3,
				"name":"john clark print shirt",
				"price":1295,
				"thumbnail":"",
				"type":"slim fit"
			},
			{ "id":4,
				"name":"red micro dots shirt",
				"price":1295,
				"thumbnail":"",
				"type":"slim fit"
			},
			{ "id":5,
				"name":"navy cat print shirt",
				"price":1295,
				"thumbnail":"",
				"type":"slim fit"
			},
			{ "id":6,
				"name":"light blues twill shirt",
				"price":1295,
				"thumbnail":"",
				"type":"contemporary fit"
			},
		];
		homeService = _homeService_;
		$httpBackend = _$httpBackend_;
	}));

	describe("Get data", function () {
		it("should make a request to QUERY the products list", function () {
			$httpBackend.expectGET('/mocked_api/products.json')
				.respond(list);
			var result = homeService.getObject().query({object:'products'});
			$httpBackend.flush();
			expect(result[0].name).toEqual(list[0].name);
		});
	});
	
});
