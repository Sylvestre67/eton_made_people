describe("Component: Dropdown", function () {
	var $componentController,bindings,vm,onSelectSpy,itemData,listData;

	beforeEach(module('eton'));

	beforeEach(inject(function(_$componentController_){
		$componentController = _$componentController_;
		onSelectSpy = jasmine.createSpy('onSelect');

		listData = [{
			id:1,
			thumbnail:'',
			title:'',
			description:''
		},{
			id:2,
			thumbnail:'',
			title:'',
			description:''
		},{
			id:3,
			thumbnail:'',
			title:'',
			description:''
		}];
		itemData =  {
			id:1,
			thumbnail:'',
			title:'',
			description:''
		};

		bindings = {
			list: listData,
			onSelect: onSelectSpy
		};

		vm = $componentController('dropdownComponent', null, bindings);
	}));

	it("should have an $onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function))
	});

	it("should expose a vm.closet value inherited from parent binding", function () {
		expect(vm.list).toEqual(listData);
	});

	describe("Function: onClickEvent", function () {
		beforeEach(inject(function(){
			vm.onSelectEvent(itemData);
		}));

		it("should fire an event back to parent onClick", function () {
			expect(onSelectSpy).toHaveBeenCalledWith({item: itemData});
		});
	});
});