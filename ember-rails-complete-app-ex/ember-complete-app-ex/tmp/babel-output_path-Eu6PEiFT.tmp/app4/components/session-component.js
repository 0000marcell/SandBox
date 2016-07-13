define('app4/components/session-component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		authManager: _ember['default'].inject.service('session'),
		actions: {
			logOut: function logOut() {
				this.get('authManager').invalidate();
			}
		}
	});
});