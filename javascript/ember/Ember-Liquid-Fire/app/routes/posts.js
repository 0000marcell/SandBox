import Ember from 'ember';

export default Ember.Route.extend({
	value: 'Change Me',
	actions: {
		first(){
		 this.render('posts.first',{
				into: 'posts',
				outlet: 'first'
		 });
		},
		second(){
			this.render('posts.second',{
				into: 'posts',
				outlet: 'second'
			});
		},
		third(){
			this.render('posts.third', {
			 into: 'posts',
			 outlet: 'third'
			});
		},
		changeValue(){
			this.set('value', "I've Changed"); 
		}
	}
});
