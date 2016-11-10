import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['md-button-dropdown'],
	hideList: false,
	didInsertElement(){
		this.$(window).click(() => {
			this.set('hideList', false);
		});
	},
	willDestroy(){
		this.$(window).unbind('click');
	},
	listIsVisible: Ember.computed('hideList', function(){
		if(this.get('hideList') === true){
			return 'visibility: visible;'
		}else{
			return 'visibility: hidden'
		}
	}),
	click(e){
		e.stopPropagation();
		this.toggleProperty('hideList');
	},
	actions: {
		logout(){
			this.get('logout')();
		}
	}
});
