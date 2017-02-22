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
			item: itemData,
			list: listData,
			onSelect: onSelectSpy
		};

		vm = $componentController('dropdownComponent', null, bindings);
	}));

	it("should have an $onInit function", function () {
		expect(vm.$onInit).toEqual(jasmine.any(Function))
	});

	describe("Function: onInit",function(){
		it("should select the first item on the list if vm.item is undefined", function () {
			vm.item = undefined;
			vm.$onInit();
			expect(vm.item).toEqual(listData[0]);
		});

		it("should NOT select the first item on the list if vm.item is undefined", function () {
			vm.item = {name:'testing'};
			vm.$onInit();
			expect(vm.item).toEqual({name:'testing'});
		});
	})

	it("should expose a vm.list value inherited from parent binding", function () {
		expect(vm.list).toEqual(listData);
	});

	describe("Function: onSelectEvent", function () {
		beforeEach(inject(function(){
			vm.onSelectEvent(itemData);
		}));

		it("should fire an event back to parent onClick", function () {
			expect(onSelectSpy).toHaveBeenCalledWith({item: itemData});
		});

		it("should assign the item value to the selected item", function () {
			expect(vm.item).toEqual(itemData);
		});
	});
});