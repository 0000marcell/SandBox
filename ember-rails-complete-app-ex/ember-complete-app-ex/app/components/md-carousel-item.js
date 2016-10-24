import Ember from 'ember';

export default Ember.Component.extend({
	tagName: '',
	didReceiveAttrs(){
		let prop = this.get('props');
		let style = `transform: translateX(${prop.x});`;
		style += `z-index: ${prop.zIndex};`;
		this.set('style', style);
	},
	actions: {
		_click(){
			this.get('move')();
			console.log('click!');
		}
	}
});
