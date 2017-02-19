describe("Component: Eton Root", function () {
	var $componentController,bindings,vm,onClickSpy;

	beforeEach(module('eton'));

	beforeEach(inject(function(_$componentController_){
		$componentController = _$componentController_;
		onClickSpy = jasmine.createSpy('onClick');
		bindings = {
			label: 'TESTING_BTN',
			onClick: onClickSpy,
		};

		vm = $componentController('btnComponent', null, bindings);
	}));

	it("should have an $onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function))
	});

	it("should expose a vm.label value inherited from parent binding", function () {
		expect(vm.label).toEqual('TESTING_BTN');
	});

	it("should fire an event back to parent onClick", function () {
		beforeEach(inject(function(){
			vm.onClickEvent();
		}));
		expect(onClickSpy).toHaveBeenCalledWith({'btn':'TESTING_BTN'})
	});

});
