define('app4/routes/signup', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.createRecord('user');
		}
	});
});