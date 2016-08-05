import Ember from 'ember';

export default Ember.Component.extend({
	init(){
		this._super(...arguments);
		Ember.$('.carousel').init();
	},
	actions: {
		next(){
			Ember.$('.carousel').carousel('next');
		},
		prev(){
			Ember.$('.carousel').carousel('prev');
		}
	}
});
