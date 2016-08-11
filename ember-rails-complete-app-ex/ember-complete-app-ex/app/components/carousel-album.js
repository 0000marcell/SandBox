import Ember from 'ember';

export default Ember.Component.extend({
	elems: [],
	elemOffSet: 0,
	carouselLength: 0,
	centerT: 0,
	tX: [],
	tY: [-5, 0, 0, 0, -5],
	tZ: [-80, -20, 0, -20, -80],
	opacity: [0.5, 0.85, 1, 0.85, 0.5],
	setUpElem(){
		let elem, elems = [];
		for(let i = 0; i <= this.get('carouselLength'); i++) {
			elem = this.$(`.carousel-item:eq(${i})`);
			elems.push(elem);
			this.translateElem(elem, i);
		}
		this.set('elems', elems);
	},
	setUpTX(){
		let firstX = (this.get('centerT') - (2 * this.get('elemOffSet'))),
				tX = [], value;			
		tX.push(firstX);
		for (var i = 1; i <= 4; i++) {
			value = firstX + (i  * this.get('elemOffSet'));	
			tX.push(value);
		}
		this.set('tX', tX);
	},
	didInsertElement(){
		let carousel = this.$('.carousel'),
				elem = this.$('.carousel-item:eq(0)'),
				centerT;
		this.set('elemOffSet', (elem.width() * 0.75));
		this.set('carouselLength', (this.$('.carousel-item').length - 1));
		centerT= ((carousel.width()/2) - (elem.width()/2));
		this.set('centerT', 
						((carousel.width()/2) - (elem.width()/2)));
		this.setUpTX();
		this.setUpElem();
		let _this = this;
		this.$('.carousel-item').click(function() {
			_this.clickHandler($(this));	
		});
	},
	clickHandler(elem){
		if(elem.position().left > this.get('centerT')){
			this.offSet('left', elem); 
		}else{ 
			this.offSet('right', elem); 
		}
	},
	translateElem(elem, id){
		if(id < 0 && this.get('elems').length === 5){
			id = 4;	
		}
		if(id >= 5 && this.get('elems').length === 5){
			id = 0;	
		}
		let translate = `translateX(${this.get('tX')[id]}px) `+
		`translateZ(${this.get('tZ')[id]}px) `+
		`translateY(${this.get('tY')[id]}px)`;
		if(this.get('tZ')[id] === 0){
			elem.css('z-index', 2);
		}else{
			elem.css('z-index', 1);
		}
		elem.css('transform', translate);
		elem.css('opacity', this.get('opacity')[id]);
		return id;
	},
	offSet(pos, clickElem){
		let elems, id, newArr = [], newPos, elem;
		elems = this.get('elems');
		console.log(elems.length);
		for (let i = 0; i < elems.length; i++) {
			elem = elems[i];
			console.log(i);
			(pos === 'left') ? id = i - 1 : id = i + 1;
			newPos = this.translateElem(elem, id);
			newArr[newPos] = elem;
		}
		this.set('elems', newArr);
		if(clickElem.css('z-index') < 2){
			this.offSet(pos, clickElem);
		}
	},

});
