import Ember from 'ember';

export default Ember.Component.extend({
	elemOffSet: 0,
	carouselLength: 0,
	tZ: [-80, -20, 0, -20, -80],
	tY: [-5, 0, 0, 0, -5],
	opacity: [0.5, 0.85, 1, 0.85, 0.5],
	setUpElem(prevElem, eIndex){
		let elem = this.$(`.carousel-item:eq(${eIndex})`),
				translate, translateX;
		translateX = 
			 (prevElem.position().left + this.get('elemOffSet'));
		translate = 	
		`translateX(${translateX}px) `+
		`translateZ(${this.get('tZ')[eIndex]}px) `+
		`translateY(${this.get('tY')[eIndex]}px)`
		elem.css('transform', translate);
		elem.css('opacity', this.get('opacity')[eIndex]);
		if(eIndex != this.get('carouselLength')){
			eIndex++;
			this.setUpElem(elem, eIndex);	
		} 
	},
	didRender(){
		let carousel = this.$('.carousel'),
				elem = this.$('.carousel-item:eq(0)'),
				centerT, firstX, translate;
		this.set('elemOffSet', (elem.width() * 0.75));
		this.set('carouselLength', (this.$('.carousel-item').length - 1));
		centerT= ((carousel.width()/2) - (elem.width()/2));
		firstX = (centerT- (2 * this.get('elemOffSet')));
		translate = 	
		`translateX(${firstX}px) `+
		`translateZ(${this.get('tZ')[0]}px) `+
		`translateY(${this.get('tY')[0]}px)`
		elem.css('transform', translate);
		elem.css('opacity', this.get('opacity')[0]);
		this.setUpElem(elem, 1);
	},
	actions: {
		offSet(elem){
			debugger;
		}
	}
});
