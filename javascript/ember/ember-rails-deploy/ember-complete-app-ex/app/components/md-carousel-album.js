// REF: 1
import Ember from 'ember';
import ResizeAware from 'ember-resize/mixins/resize-aware';

export default Ember.Component.extend(ResizeAware, {
	images: [],
	childrens: [],
	resizeWidthSensitive: true,
	childW: Ember.computed('width', function(){
		let width = this.get('width')/3;
		if(width < 250){
			width = 250;
		}else if (width > 500){
			width = 500;	
		}
		return width;
	}),
	carStyle: Ember.computed('childW', function(){
		let carH =  this.get('childW') + 40;
		return `height: ${carH}px`;
	}),
	descStyle: 	Ember.computed('childW', function(){
	 	let descH = this.get('childW');	
		return `top: ${descH}px`;
	}),
	initialImages: Ember.computed('images', function(){
		return this.get('images').slice(0, 5);	
	}),
	didReceiveAttrs(){
		this.get('model').loadImages().then((images) => {
			this.set('images', images);
		});
	},
	didResize(width){
		this.set('width', width);
		this.get('childrens').forEach((child) => {
			 child.set('parentW', width);
		});
	},
	actions: {
		register(child){
			child.set('parent', this);
			this.get('childrens').pushObject(child);
			if(child.get('id') === 4){
				this._handleResizeEvent();
			}
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
