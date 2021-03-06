import { moduleFor, test  } from 'ember-qunit';
import Ember from 'ember';
import DS from 'ember-data';

moduleFor('serializer:application', 'Unit | Serializer | application', {
	// Specify the other units that are required for this test.
});

test('it serializes records in JSON Api format serializer-01', function(assert) {
	let DummyModel = DS.Model.extend({
		name: DS.attr('string'),
		address: DS.attr('string')
	});

	this.registry.register('model:application', DummyModel);

	let store = Ember.getOwner(this).lookup('service:store');

	let basicModel = {
		name: 'Test Name',
	  address: 'SOme Dummy Address'
	};

	let expectedHash = {
		data: {
			attributes: {
				name: basicModel.name,
	      address: basicModel.address
			},
			type: 'applications'
		}
	};
	Ember.run(function(){
		// Create an instance of DummyModel and serialize
		let serializedRecord = store.createRecord('application', basicModel).serialize();
		assert.deepEqual(serializedRecord, expectedHash);
	});
});
