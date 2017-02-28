describe("Route: Profile", function () {

	var $stateRegistry,$state;

	beforeEach(module('eton'));

	beforeEach(inject(function(_$stateRegistry_,_$state_){
		$stateRegistry = _$stateRegistry_;
		$state = _$state_;
	}));

	it("should have a discovery.profile state", function () {
		expect($stateRegistry.states['home']).toBeDefined();
	});
});