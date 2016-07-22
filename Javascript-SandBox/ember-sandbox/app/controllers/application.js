import Ember from 'ember';
import BaseHandler from 'ember-cli-mirage/route-handlers/shorthands/base';

export default Ember.Controller.extend({
	actions: {
		test(){
			let payload = {
			'data': {
				'attributes': {
					'does-mirage': true,
					'name': 'Sam'
				},
				'relationships': {
					'company': {
						'data': {
							'id': '1',
							'type': 'companies'
						}
					},
					'github-account': {
						'data': {
							'id': '1',
							'type': 'github-accounts'
						}
					},
					'something': {
						'data': null
					},
					'many-things': {
						'data': []
					}
				},
				'type': 'github-account'
			}
			};
			
			let base = new BaseHandler();
			/*
			base._getJsonApiDocForRequest = function(request, modelName){
				return payload;	
			};
			*/
			this.request = { params: { id: '' } };
			let attrs = base._getAttrsForRequest(this.request, 'user');
			debugger;
		}
	}
});
