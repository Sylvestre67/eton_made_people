describe("Component: Footer", function () {
	var $componentController,bindings,vm;

	beforeEach(module('eton'));

	beforeEach(inject(function(_$componentController_){
		$componentController = _$componentController_;
		bindings = {

		};
		vm = $componentController('footerComponent', null, bindings);
	}));

	it("should have a list of countries avalable", function () {
		expect(vm.listOfCountries.length).toEqual(4)
	});

	it("should have an $onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function))
	});

	describe("Function: $onInit", function () {
		beforeEach(function(){
			vm.$onInit();
		});

		it("should set the selected country to the first value of the country list", function () {
			expect(vm.selectedCountry).toEqual(vm.listOfCountries[0]);
		});
	});

	it("should have a function to handle country update", function () {
		expect(vm.updateCountry).toEqual(jasmine.any(Function));
	});

	describe("Function: updateCountry", function () {
		beforeEach(function(){
			vm.updateCountry(vm.listOfCountries[2]);
		});

		it("should assign the updated country to the selected one", function () {
			expect(vm.selectedCountry).toEqual(vm.listOfCountries[2]);
		});
	});
});
