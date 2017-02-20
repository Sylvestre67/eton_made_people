describe("Component: Home", function () {
	var $componentController,$q,$rootScope,bindings,vm,
		homeService,homeServiceSpy,homeServiceDeferred,
		productList,closetList,view_products;

	beforeEach(module('eton'));

	beforeEach(inject(function(_$componentController_,_$q_,_$rootScope_,_homeService_){
		$rootScope = _$rootScope_;
		$q = _$q_;
		$componentController = _$componentController_;
		bindings = {};
		homeServiceDeferred = $q.defer();
		homeService = _homeService_;
		homeServiceSpy = spyOn(homeService,'query').and.callFake(function(){
			return homeServiceDeferred.promise
				.then(arguments[1])
				.catch(arguments[2]);
		});

		vm = $componentController('homeComponent',{homeService: homeService}, bindings);
	}));

	it("should have an $onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function))
	});

	describe("Function: queryObject", function () {
		describe("api call is succesfull", function () {
			beforeEach(inject(function(){
				vm.queryObject('products');
				homeServiceDeferred.resolve(productList);
				//////
				$rootScope.$apply();
			}));

			it("should call the homeService to retrieve list of products", function () {
				expect(homeServiceSpy).toHaveBeenCalledWith({object:'products'},
					jasmine.any(Function),
					jasmine.any(Function));
			});

			it("should assign the response to vm.products",function(){
				expect(vm['products']).toEqual(productList);
			});
		});
		describe("api call fail",function(){
			beforeEach(inject(function(){
				spyOn(console,'error');
			}));

			beforeEach(function(){
				var view_products = {};
				vm.queryObject('products',view_products);
				homeServiceDeferred.reject('ERROR MESSAGE');
				//////
				$rootScope.$apply();
			});

			it("should log the error message to the console", function () {
				expect(console.error).toHaveBeenCalledWith('ERROR MESSAGE');
			});
		});
	});
});