import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['md-user-settings-form'],
	init(){
		this._super(...arguments);
		this.set('msgs', []);
		this.set('errors', []);
	},
	actions: {
		edit(){
			this.get('edit')(this.get('model'), this);
		}
	}
});
