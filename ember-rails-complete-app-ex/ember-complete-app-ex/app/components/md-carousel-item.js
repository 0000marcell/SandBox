import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	didReceiveAttrs(){
		let transform = "transform: translateX(100px)";
		this.set('style', transform);
		this.set('src', this.get('props.src'));
	},
	actions: {
		_click(){
			console.log('click!');
		}
	}
});
