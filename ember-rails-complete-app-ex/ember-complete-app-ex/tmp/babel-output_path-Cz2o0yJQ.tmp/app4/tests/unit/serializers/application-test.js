define('app4/tests/unit/serializers/application-test', ['exports', 'ember-qunit', 'ember', 'ember-data'], function (exports, _emberQunit, _ember, _emberData) {

	(0, _emberQunit.moduleFor)('serializer:application', 'Unit | Serializer | application', {
		// Specify the other units that are required for this test.
	});

	(0, _emberQunit.test)('it serializes records in JSON Api format', function (assert) {
		var DummyModel = _emberData['default'].Model.extend({
			name: _emberData['default'].attr('string'),
			address: _emberData['default'].attr('string')
		});

		this.registry.register('model:application', DummyModel);

		var store = _ember['default'].getOwner(this).lookup('service:store');

		var basicModel = {
			name: 'Test Name',
			address: 'SOme Dummy Address'
		};

		var expectedHash = {
			data: {
				attributes: {
					name: basicModel.name,
					address: basicModel.address
				},
				type: 'applications'
			}
		};
		_ember['default'].run(function () {
			// Create an instance of DummyModel and serialize
			var serializedRecord = store.createRecord('application', basicModel).serialize();
			assert.deepEqual(serializedRecord, expectedHash);
		});
	});
});