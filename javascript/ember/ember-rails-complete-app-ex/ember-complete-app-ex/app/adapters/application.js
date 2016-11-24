import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'app4/config/environment';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
	host: ENV.APP.host,
	namespace: 'api/v1',
	authorizer: 'authorizer:application',
	coalesceFindRequests: true,
	parseErrorResponse: function(responseText) {
		var response = JSON.parse(responseText);
	 	var json = {errors: [response.errors]};
	 	return json;
	}
});
