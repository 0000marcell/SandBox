define('app4/routes/users/user', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
	exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
		model: function model(param) {
			return this.store.find('user', param.user_username);
		},
		serialize: function serialize(model) {
			return {
				user_username: model.get('username')
			};
		}
	});
});