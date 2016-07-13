define('app4/serializers/application', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].JSONAPISerializer.extend({
		/*
  serialize() {
  	const result = this._super(...arguments),
  		 attr = result.data.attributes || {},
  		 rel = result.data.relationships || {};
  	return Object.keys(rel).reduce(function(acc, elem){
  		const data = rel[elem].data;
  		elem = Ember.String.underscore(elem);
  		if(data){
  			acc[elem + "_id"] = data.id;
  		}
  		if(data && data.type){
  			acc[elem + "_type"] = data.type[0].toUpperCase() + data.type.slice(1, -1);
  		}
  		return acc;
  	}, attr);
  }
  */
	});
});
//import Ember from 'ember';