import Ember from 'ember';

export default Ember.Component.extend({
	elemOffSet: 0,
	carouselLength: 0,
	centerT: 0,
	tx: [],
	tZ: [-80, -20, 0, -20, -80],
	tY: [-5, 0, 0, 0, -5],
	opacity: [0.5, 0.85, 1, 0.85, 0.5],
	setUpElem(prevElem, eIndex){
		let elem = this.$(`.carousel-item:eq(${eIndex})`),
				translate, translateX;
		translateX = 
			 (prevElem.position().left + this.get('elemOffSet'));
		translate = this.translateProp(translateX, eIndex);
		elem.css('transform', translate);
		elem.css('opacity', this.get('opacity')[eIndex]);
		if(eIndex !== this.get('carouselLength')){
			eIndex++;
			this.setUpElem(elem, eIndex);	
		} 
	},
	setUpTX(){
		let firstX = (this.get('centerT') - (2 * this.get('elemOffSet'))),
				tX = [], value;			
		tX.push(firsX);
		for (var i = 1, i <= 5; i++) {
			value = firstX + (i  * this.get('elemOffSet'));	
			tX.push(value);
		}
		this.set('tX', tX);
	},
	didInsertElement(){
		let carousel = this.$('.carousel'),
				elem = this.$('.carousel-item:eq(0)'),
				centerT, firstX, translate;
		this.set('elemOffSet', (elem.width() * 0.75));
		this.set('carouselLength', (this.$('.carousel-item').length - 1));
		centerT= ((carousel.width()/2) - (elem.width()/2));
		this.set('centerT', 
						((carousel.width()/2) - (elem.width()/2)));
		this.setUpTX();
		this.setUpElem();
		/*
		this.set('centerT', centerT)
		firstX = (centerT- (2 * this.get('elemOffSet')));
		translate = this.translateProp(firstX, 0);
		elem.css('transform', translate);
		elem.css('opacity', this.get('opacity')[0]);
		this.setUpElem(elem, 1);
		let _this = this;
		this.$('.carousel-item').click(function() {
			_this.clickHandler($(this));	
		});
		*/
	},
	clickHandler(elem){
		if(elem.position().left < this.get('centerT')){
			this.offSet();
		}else{
			this.offSet();
		}
	},
	translateProp(transX, id){
		return `translateX(${transX}px) `+
		`translateZ(${this.get('tZ')[id]}px) `+
		`translateY(${this.get('tY')[id]}px)`;
	},
	offSet(){
		let elem, translateX, translate;
		//debugger;
		for (let i = 0; i <= this.get('carouselLength'); i++) {
			elem = this.$(`.carousel-item:eq(${i})`),
			if(elem.position().left == this.get('firstPos')){
				this.transToLast(elem);
			}else if(i === this.get('carouselLength')){
				translateX = this.get('firstPos');	
			}else{
				translateX = elem.position().left - this.get('elemOffSet');
			}

			translateX = elem.position().left - this.get('elemOffSet');
			console.log(translateX);
			translate = 
				this.translateProp(translateX, i);
			elem.css('transform', translate);
			elem.css('opacity', this.get('opacity')[0]);
		}
	}
});
