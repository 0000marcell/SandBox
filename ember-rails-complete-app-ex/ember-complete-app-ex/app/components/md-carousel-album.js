//REF: 0
import Ember from 'ember';
import ResizeAware from 'ember-resize/mixins/resize-aware';

export default Ember.Component.extend(ResizeAware, {
	childrens: [],
	resizeWidthSensitive: true,
	classNames: ['md-carousel-album'],
	didInsertElement(){
		this._super(...arguments);
	},
	didResize(width){
		this.get('childrens').forEach((child) => {
			 child.set('parentW', width);
			 child.calcProp();
		});
	},
	actions: {
		register(child){
			child.set('parentW', Ember.$(window).width());
			child.calcProp();
			this.get('childrens').pushObject(child);
		},
		move(id){
			this.get('childrens').forEach((child) => {
				if(id > 2){
					child.decrementId();
				}else{
					child.incrementId();
				}
			});
		}
	}
});
