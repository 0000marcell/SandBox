import Ember from 'ember';

export default Ember.Route.extend({
	renderTemplate(){
		console.debug('rendering new');
		this.render( {into: 'posts', outlet: 'new'} );
	}
});
