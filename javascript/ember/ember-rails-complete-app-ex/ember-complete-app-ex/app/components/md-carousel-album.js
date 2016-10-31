//REF: 0
import Ember from 'ember';
import ResizeAware from 'ember-resize/mixins/resize-aware';

export default Ember.Component.extend(ResizeAware, {
	childrens: [],
	resizeWidthSensitive: true,
	didReceiveAttrs(){
		this.set('loading', true);
		this.get('model').loadImages().then((images) => {
			this.set('loading', false); 
			this.set('images', images);
			this.set('initialImages', images.slice(0, 5));
		});
	},
	didInsertElement(){
		this._super(...arguments);
	},
	didResize(width){
		this.get('childrens').forEach((child) => {
			 child.set('parentW', width);
			 child.calcProp();
			 if(child.get('id') === 2){
				this.setUpCarousel(child.get('width'));
			 }
		});
	},
	setUpCarousel(width){
		let carH =  parseInt(width) + 40,
	 			descH = carH - 30;	
		this.set('carStyle', `height: ${carH}px`);
		this.set('descStyle', `top: ${descH}px`);
	},
	actions: {
		register(child){
			let carW = Ember.$(window).width();
			child.set('parent', this);
			child.set('parentW', carW);
			child.calcProp();
			this.get('childrens').pushObject(child);
			if(child.get('id') === 2){
				this.set('description', child.get('image.description'));
				this.setUpCarousel(child.get('width'));
			}
		},
		move(id){
			this.get('childrens').forEach((child, index) => {
				if(index === 2){
					this.set('description', child.get('image.description'));
				}
				if(id > 2){
					child.decrementId();
				}else{
					child.incrementId();
				}
			});
		},
	}
});
