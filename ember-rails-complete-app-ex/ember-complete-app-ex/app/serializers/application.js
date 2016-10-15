import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
	serialize() {
		debugger;
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
	},

	normalizeQueryResponse(store, clazz, payload){
		const result = this._super(...arguments);
		result.meta = result.meta || {};

		if(payload.links){
			result.meta.pagination = this.createPageMeta(payload.links);
		}
		return result;
	},
	
	createPageMeta(data){
		let meta = {};

		Object.keys(data).forEach(type => {
			const link = data[type];
			meta[type] = {};
			let a = document.createElement('a');
			a.href = link;

			a.search.slice(1).split('&').forEach(pairs => {
				const [param, value] = pairs.split('=');
				if (param === 'page%5Bnumber%5D') {
					meta[type].number = parseInt(value);
				}if (param === 'page%5Bsize%5D') {
					meta[type].size = parseInt(value);
				}
			});
			a = null;
		});
		return meta;	
	}
});
