import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['md-carousel-item'],
	click(){
		let elem = this.get('element');
		console.log('elem: ', elem);
	},
	didReceiveAttrs(){
	}
});
