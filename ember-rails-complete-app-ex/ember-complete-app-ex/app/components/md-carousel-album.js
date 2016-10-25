//REF: 0
import Ember from 'ember';
import ResizeAware from 'ember-resize/mixins/resize-aware';

export default Ember.Component.extend(ResizeAware, {
	resizeWidthSensitive: true,
	classNames: ['container', 'md-carousel-album'],
	elemsProp: [{zIndex: 1},{zIndex: 2},
			 		    {zIndex: 3},{zIndex: 2},{zIndex: 1}],
	didInsertElement(){
		this._super(...arguments);
		this.didResize(this.$(window).width());
	},
	didResize(width){
		let carW = width,
				elemW = (carW/3),
				center = elemW,
				elemsProp = this.get('elemsProp'),
				offI = 2,
				offSet = (elemW/1.5),
				i = 0;
		for(let elem of elemsProp){
			if(i == 2){
				elem.x = `${center}px`;	
			}else{
				if(i > 2){
					elem.x = `${center + (offI * offSet)}px`;
				}else{
					elem.x = `${center - (offI * offSet)}px`;	
				}
			}
			if(offI == 1){
				offI++;
			}else{
				offI--;
			}
			elemsProp[i] = elem;
			i++;
		}
		this.set('elemsProp', elemsProp);
	},
	actions: {
		move(){
			console.log('move!');
		}
	}
});
