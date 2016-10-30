import Ember from 'ember';

export default Ember.Component.extend({
	didReceiveAttrs(){
		this.get('register')(this);
	},
	setStyle(x, y, z, width, zIndex){
		let style = `transform: translate3d(${x}px, ${y}px, ${z}px);`;
		style += `width: ${width}px; height: ${width}px;`;
		style += `z-index: ${zIndex};`;
		this.set('style', style);
	},
	calcProp(){
		let parentW = parseInt(this.get('parentW')),
			  width = parentW/3,
			 	x, y, z, zIndex;
		if(width < 250){
			width = 250;
		}else if (width > 500){
			width = 500;	
		}
		let center = (parentW/2) - (width/2),
			  offSet = width/3;
		switch(this.get('id')){
			case 0:
				x = center - (2 * offSet);
				y = -35;
				z = -200;
				zIndex = 0;
				break;
			case 1:
				x = center - (1 * offSet);
				y = -20;
				z = -100;
				zIndex = 1;
				break;
			case 2:
				x =  center;
				y = 0;
				z = 0;
				zIndex = 2;
				break;
			case 3:
				x = center + (1 * offSet);
				y = -20;
				z = -100;
				zIndex = 1;
				break;
			case 4:
				x = center + (2 * offSet);
				y = -35;
				z = -200;
				zIndex = 0;
				break;
		}
		this.setStyle(x, y, z, width, zIndex);
	},
	tagName: '',
	decrementId(){
		switch(this.get('id')){
			case 0:
				this.set('id', 4);
				break;
			case 1:
				this.set('id', 0);
				break;
			case 2:
				this.set('id', 1);
				break;
			case 3:
				this.set('id', 2);
				break;
			case 4:
				this.set('id', 3);
				break;
		}
		this.calcProp();
	},
	incrementId(){
		switch(this.get('id')){
			case 0:
				this.set('id', 1);
				break;
			case 1:
				this.set('id', 2);
				break;
			case 2:
				this.set('id', 3);
				break;
			case 3:
				this.set('id', 4);
				break;
			case 4:
				this.set('id', 0);
				break;
		}
		this.calcProp();
	},
	actions: {
		_click(){
			this.get('move')(this.get('id'));
		}
	}
});
