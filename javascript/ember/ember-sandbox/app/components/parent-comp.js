import Ember from 'ember';
import ParentComponentSupport from 
       'ember-composability/mixins/parent-component-support';
import layout from 
			 '../templates/components/parent-comp';

//const { A, computed } = Ember;

export default Ember.Component.extend(ParentComponentSupport, {
	actions: {
		test(){
			this.sendAction('play');
		}
	},
	layout,
	registerChildComponent(childComponent) {
    this.get('_childComponents').add(childComponent, childComponent.get('key'));
    this._notifyComposableChildrenChanged();
  }
});
