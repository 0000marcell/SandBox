import Ember from 'ember';

export default Ember.Component.extend({
	didReceiveAttrs(){
		this.get('register')(this);
	},
	setStyle(x, width, zIndex){
		let style = `transform: translateX(${x}px);`
		style += `width: ${width}px; height: ${width}px;`;
		style += `background-color: #c8c8c8;`;
		style += `z-index: ${zIndex};`;
		this.set('style', style);
	},
	calcProp(){
		let parentW = parseInt(this.get('parentW')),
			  width = parentW/3,
			 	x, zIndex;
		if(width < 250){
			width = 250;
		}else{
			width = 500;	
		}
		let center = (parentW/2) - (width/2),
			  offSet = width/3;
		switch(this.get('id')){
			case '0':
				x = center - (2 * offSet);
				zIndex = 0;
				break;
			case '1':
				x = center - (1 * offSet);
				zIndex = 1;
				break;
			case '2':
				x =  center;
				zIndex = 2;
				break;
			case '3':
				x = center + (1 * offSet);
				zIndex = 1;
				break;
			case '4':
				x = center + (2 * offSet);
				zIndex = 0;
				break;
		}
		this.setStyle(x, width, zIndex);
	},
	tagName: '',
		decrementId(){
		switch(this.get('id')){
			case '0':
				this.set('id', '4');
				break;
			case '1':
				this.set('id', '0');
				break;
			case '2':
				this.set('id', '1');
				break;
			case '3':
				this.set('id', '2');
				break;
			case '4':
				this.set('id', '3');
				break;
		}
	},
	incrementId(){
		switch(this.get('id')){
			case '0':
				this.set('id', '1');
				break;
			case '1':
				this.set('id', '2');
				break;
			case '2':
				this.set('id', '3');
				break;
			case '3':
				this.set('id', '4');
				break;
			case '4':
				this.set('id', 0);
				break;
		}
	},
	actions: {
		_click(){
			this.get('move')(this.get('id'));
		}
	}
});
