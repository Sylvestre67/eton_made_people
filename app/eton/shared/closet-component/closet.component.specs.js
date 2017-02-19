describe("Component: Closet", function () {
	var $componentController,bindings,vm,onClickSpy,closet;

	beforeEach(module('eton'));

	beforeEach(inject(function(_$componentController_){
		$componentController = _$componentController_;
		onClickSpy = jasmine.createSpy('onClick');
		closet = {
			id:1,
			thumbnail:'',
			title:'',
			description:''
		};

		bindings = {
			closet: closet,
			onClick: onClickSpy
		};

		vm = $componentController('closetComponent', null, bindings);
	}));

	it("should have an $onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function))
	});

	it("should expose a vm.closet value inherited from parent binding", function () {
		expect(vm.closet).toEqual(closet);
	});

	it("should fire an event back to parent onClick", function () {
		beforeEach(inject(function(){
			vm.onClickEvent();
		}));
		expect(onClickSpy).toHaveBeenCalledWith({closet: vm.closet})
	});

});
