import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['container', 'md-carousel-album'],
	parent: this,
	items: [{x: '10px', zIndex: 1},
			 	  {x: '60px', zIndex: 2},
			 		{x: '110px', zIndex: 3},
			 		{x: '170px', zIndex: 2},
			 		{x: '220px', zIndex: 1}],
	actions: {
		move(){
			console.log('move!');
		}
	}
});
