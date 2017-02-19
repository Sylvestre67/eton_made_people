describe("Component: Footer", function () {
	var $componentController,bindings,vm;

	beforeEach(module('eton'));

	beforeEach(inject(function(_$componentController_){
		$componentController = _$componentController_;
		bindings = {
		};
		vm = $componentController('footerComponent', null, bindings);
	}));

	it("should have an $onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function))
	});
});
