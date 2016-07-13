define('app4/controllers/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		msgProp: {},
		authManager: _ember['default'].inject.service('session'),
		actions: {
			login: function login() {
				var _this = this;

				this.get('authManager').authenticate('authenticator:oauth2', this.get('email'), this.get('password')).then(function () {
					var user = _this.store.find('user', _this.get('authManager.data.authenticated.user.id'));
					_this.transitionToRoute('users.user', user);
				}, function () {
					_this.set('msgProp.color', 'red accent 4');
					_this.set('msgProp.msg', 'wrong email/password combination!');
				});
			}
		}
	});
});