define('app4/adapters/application', ['exports', 'ember-data/adapters/json-api', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, _emberDataAdaptersJsonApi, _emberSimpleAuthMixinsDataAdapterMixin) {
	exports['default'] = _emberDataAdaptersJsonApi['default'].extend(_emberSimpleAuthMixinsDataAdapterMixin['default'], {
		namespace: 'api/v1',
		authorizer: 'authorizer:application',
		parseErrorResponse: function parseErrorResponse(responseText) {
			var response = JSON.parse(responseText);
			var json = { errors: [response.errors] };
			return json;
		}
	});
});