describe("Component: Closet", function () {
	var $componentController,bindings,vm,onClickSpy,product;

	beforeEach(module('eton'));

	beforeEach(inject(function(_$componentController_){
		$componentController = _$componentController_;
		onClickSpy = jasmine.createSpy('onClick');
		product = {
			id:1,
			thumbnail:'',
			title:'',
			description:''
		};

		bindings = {
			product: closet,
			onClick: onClickSpy
		};

		vm = $componentController('productComponent', null, bindings);
	}));

	it("should have an $onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function))
	});

	it("should expose a vm.closet value inherited from parent binding", function () {
		expect(vm.product).toEqual(product);
	});

	it("should fire an event back to parent onClick", function () {
		beforeEach(inject(function(){
			vm.onClickEvent();
		}));
		expect(onClickSpy).toHaveBeenCalledWith({product: vm.product})
	});

});