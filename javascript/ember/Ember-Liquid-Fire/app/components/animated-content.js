import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(){
		var screenHeight = Ember.$(window).height(),
				HTrigger = screenHeight * 0.7;
		console.log(HTrigger);
		Ember.$(window).bind('scroll', () => {
			var scrollTop     = Ember.$(window).scrollTop(),
			    firstOffset = Ember.$('#first-trigger').offset().top,
					secondOffset = Ember.$('#second-trigger').offset().top,
					thirdOffset = Ember.$('#third-trigger').offset().top,
			    firstDistance = (firstOffset - scrollTop),
					secondDistance = (secondOffset - scrollTop),
					thirdDistance = (thirdOffset - scrollTop);
					console.log(firstDistance);
					if((firstDistance < HTrigger) && 
							(this.get('showFirst') === false)){
						this.toggleProperty('showFirst');
					}else if((firstDistance > HTrigger) && 
						(this.get('showFirst') === true)){
						this.toggleProperty('showFirst');
					}
					if((secondDistance < HTrigger) && 
							(this.get('showSecond') === false)){
						this.toggleProperty('showSecond');
					}else if( ( firstDistance > HTrigger ) &&
						( this.get('showSecond') === true )	){
						this.toggleProperty('showSecond');
					}
					if((thirdDistance < HTrigger) && 
							(this.get('showThird') === false)){
						this.toggleProperty('showThird');
					}else if((firstDistance > HTrigger) &&
							(this.get('showThird') === true)){
						this.toggleProperty('showThird')
					}
		});
	},
	showFirst: false,
	showSecond: false,
	showThird: false,
	actions: {
		showFirst(){
			this.toggleProperty('showFirst');
		},
		showSecond(){
			this.toggleProperty('showSecond');
		},
		showThird(){
			this.toggleProperty('showThird');
		}
	}
});
