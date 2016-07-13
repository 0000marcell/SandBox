define('app4/mirage/factories/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Factory.extend({
		username: function username(i) {
			return 'user' + i;
		},
		name: function name(i) {
			return 'User ' + i;
		},
		email: function email(i) {
			return 'user' + i + '@gmail.com';
		},
		password: '123456'
	});
});