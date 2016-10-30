import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		routeAction(...args){
			alert('testing'+args[0]+args[1]);	
		}
	}
});
