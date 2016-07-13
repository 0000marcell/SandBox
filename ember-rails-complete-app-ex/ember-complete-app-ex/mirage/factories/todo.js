import Ember from 'ember';
import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
	title(i) { return `todo ${i}` }
	/*
	todo_url:  Ember.computed('title', () => {
		debugger;
		Ember.String.dasherize(this.title);
	})
*/
});
