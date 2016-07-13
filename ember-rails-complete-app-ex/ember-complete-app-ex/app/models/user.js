import DS from 'ember-data';

export default DS.Model.extend({
	todos:							   DS.hasMany('todo'),
	email:								 DS.attr('string'),
	name:									 DS.attr('string'),
	username:							 DS.attr('string'),
	password:							 DS.attr('string')
});
