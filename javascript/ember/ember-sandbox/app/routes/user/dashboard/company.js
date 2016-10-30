import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		routeAction(){
			alert('company');
			return 'company';
		}
	}
});
