import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
	namespace: 'api/v1',
	authorizer: 'authorizer:application',
	coalesceFindRequests: true,
	parseErrorResponse: function(responseText) {
		var response = JSON.parse(responseText);
		var json = {errors: [response.errors]};
		return json;
	}
});
