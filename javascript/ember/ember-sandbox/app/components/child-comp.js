import Ember from 'ember';
import ChildComponentSupport from 
       'ember-composability/mixins/child-component-support';
import parentComp from './parent-comp';
import layout from '../templates/components/child-comp';

export default Ember.Component.extend(ChildComponentSupport, {
	layout,
	_parentComponentTypes: [parentComp],
	value: Ember.computed('row', function () {
		return this.get('row.id');
	}),
	label: Ember.computed('row', function () {
		return this.get('row.name');
	}),
	actions: {
		test(){
		}
	}
});
