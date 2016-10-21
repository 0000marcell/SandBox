import Ember from 'ember';

export default Ember.Component.extend({
	click(e){
		this.$('#sidenav').find('a').css('background-color', 'white');
		this.$(e.target).css('background-color', '#f5f5f5');
	},
	didInsertElement(){
		let windowW = this.$(window).width();
		if(windowW < 1000){
			this.$('.button-collapse').sideNav({closeOnClick: true});
		}else{
			this.$('.button-collapse').sideNav({closeOnClick: false});
		}
	}
});
