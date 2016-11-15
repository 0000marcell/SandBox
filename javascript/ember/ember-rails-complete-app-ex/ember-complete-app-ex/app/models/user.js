import DS from 'ember-data';

export default DS.Model.extend({
	image: 								 DS.attr('string'),
	todos:							   DS.hasMany('todo'),
	tasks:							   DS.hasMany('task'),
	email:								 DS.attr('string'),
	name:									 DS.attr('string'),
	username:							 DS.attr('string'),
	password:							 DS.attr('string')
});
