describe("Component: Closet", function () {
	var $componentController,bindings,vm,onClickSpy,closetData;

	beforeEach(module('eton'));

	beforeEach(inject(function(_$componentController_){
		$componentController = _$componentController_;
		onClickSpy = jasmine.createSpy('onClick');
		closetData =  {
			id:1,
			thumbnail:'',
			title:'',
			description:''
		};

		bindings = {
			closet: closetData,
			onClick: onClickSpy
		};

		vm = $componentController('closetComponent', null, bindings);
	}));

	it("should have an $onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function))
	});

	it("should expose a vm.closet value inherited from parent binding", function () {
		expect(vm.closet).toEqual(closetData);
	});

	describe("Function: onClickEvent", function () {
		beforeEach(inject(function(){
			vm.onClickEvent();
		}));

		it("should fire an event back to parent onClick", function () {
			expect(onClickSpy).toHaveBeenCalledWith({ 'closet': closetData})
		});
	});
});
