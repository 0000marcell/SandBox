// REF: 0
import Ember from 'ember';

export default Ember.Component.extend({
	didReceiveAttrs(){
		this.get('register')(this);
	},
	setStyle(x, y, z, width, zIndex, opacity){
		let style = `transform: translate3d(${x}px, ${y}px, ${z}px);`;
		style += `width: ${width}px; height: ${width}px;`;
		style += `z-index: ${zIndex};`;
		style += `opacity: ${opacity};`;
		style += `animation: ${this.get('animation')}`;
		this.set('style', style);
	},
	calcProp(){
		let parentW = parseInt(this.get('parentW')),
			  width = parentW/3,
			 	x, y, z, zIndex, opacity;
		if(width < 250){
			width = 250;
		}else if (width > 500){
			width = 500;	
		}
		this.set('width', width);
		let center = (parentW/2) - (width/2),
			  offSet = width/3;
		switch(this.get('id')){
			case 0:
				x = center - (2 * offSet);
				y = -35;
				z = -200;
				zIndex = 0;
				opacity = 0.5;
				break;
			case 1:
				x = center - (1 * offSet);
				y = -20;
				z = -100;
				zIndex = 1;
				opacity = 0.75;
				break;
			case 2:
				x =  center;
				y = 0;
				z = 0;
				zIndex = 2;
				opacity = 1;
				break;
			case 3:
				x = center + (1 * offSet);
				y = -20;
				z = -100;
				zIndex = 1;
				opacity = 0.75;
				break;
			case 4:
				x = center + (2 * offSet);
				y = -35;
				z = -200;
				zIndex = 0;
				opacity = 0.5;
				break;
		}
		this.setStyle(x, y, z, width, zIndex, opacity);
	},
	tagName: '',
	decrementId(){
		this.set('animation', 'none;')
		switch(this.get('id')){
			case 0:
				this.set('id', 4);
				this.setNextImage();
				// hide the element while moving to the other side
				this.set('animation', 'fade 0.5s linear;');
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
		this.set('animation', 'none;')
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
				// hides the element while moving to the other side;
				this.set('animation', 'fade 0.5s linear;');
				this.setPreviousImage();
				break;
		}
		this.calcProp();
	},
	setNextImage(){
		let imageId = this.get('imageId'),
				lastImageId = this.get('parent').get('images.length') - 1,
				newId;
		if((imageId + 5) > lastImageId) {
			newId = 4 - (imageId - lastImageId);
		}else{
			newId = imageId + 5;
		}
		this.setImage(newId);
	},
	setPreviousImage(){
		let imageId = this.get('imageId'),
				lastImageId = this.get('parent').get('images.length') - 1,
				newId;
		console.log('lastImageId', lastImageId);
		console.log('imageId ', imageId);
		if((imageId - 5) < 0){
			newId = lastImageId + (imageId - 4); 
		}else{
			newId = imageId - 5;
		}	
		this.setImage(newId);
	},
	setImage(id){
		console.log('new image: ', id);
		this.set('image', this.get('parent').get('images')
				.objectAt(id));
		this.set('imageId', id);
	},
	actions: {
		_click(){
			this.get('move')(this.get('id'));
		}
	}
});
