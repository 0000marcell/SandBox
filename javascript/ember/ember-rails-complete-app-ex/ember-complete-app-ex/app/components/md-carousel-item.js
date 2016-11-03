// REF: 0
import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	displayState: Ember.computed('loading', function(){
		if(this.get('loading')){
			return `display: visible;`
		}else{
			return `display: none;`
		}
	}),
	width: Ember.computed('parentW', function(){
		let width = this.get('parentW')/3;
		if(width < 250){
			width = 250;
		}else if (width > 500){
			width = 500;	
		}
		return width;
	}),
	offSet: Ember.computed('width', function(){
		return this.get('width')/1.25;	
	}),
	style: Ember.computed('offSet', 'id', function(){
		let id = this.get('id'),
				parentW = this.get('parentW'),
				width = this.get('width'),
				offSet = this.get('offSet'),
				center = (parentW/2) - (width/2),
				x = center + ((id - 2) * offSet),
				y = -10*Math.pow(id, 2) + 40*id - 40,
		    z = -50*Math.pow(id, 2) + 200*id -200,
				zIndex = -1*Math.pow(id, 2)+4*id + 1,
				opacity = -0.125*Math.pow(id, 2)+0.5*id + 0.5;
		let style = `transform: translate3d(${x}px, ${y}px, ${z}px);`;
		style += `width: ${width}px; height: ${width}px;`;
		style += `z-index: ${zIndex};`;
		//style += `opacity: ${opacity};`;
		style += `animation: ${this.get('animation')}`;
		return style;
	}),
	didReceiveAttrs(){
		this.get('register')(this);
		this.setImage(this.get('imageId'));
	},
	decrementId(){
		this.set('animation', 'none;');
		let id = this.get('id');
		if(id === 0){
			this.set('id', 4);	
			this.set('animation', 'fade 0.5s linear;');
			this.setNextImage();
		}else{
			this.set('id', id - 1);
		}
	},
	incrementId(){
		this.set('animation', 'none;');
		let id = this.get('id');
		if(id === 4){
			this.set('id', 0);
			this.set('animation', 'fade 0.5s linear;');
			this.setPreviousImage();
		}else{
			this.set('id', id + 1);
		}
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
		if((imageId - 5) < 0){
			newId = lastImageId + (imageId - 4); 
		}else{
			newId = imageId - 5;
		}	
		this.setImage(newId);
	},
	setImage(id){
		let imageItem = this.get('parent')
								.get('images').objectAt(id);
		if(this.get('id') === 2){
			this.get('parent').set('description', 
					imageItem.get('description'));
		}
		let image = new Image();
		image.src = imageItem.get('url');
		this.toggleProperty('loading');
		image.onload = () => {
			setTimeout(() => { 
				this.toggleProperty('loading');
				Ember.$(`#md-carousel-item-${this.get('id')} > .image-holder`)
					.html(image);	
				this.set('imageId', id);
			}, 1000);
		}
	},
	actions: {
		_click() {
			this.get('move')(this.get('id'));
		}
	}
});
