'use strict';

var _collection = require('ember-cli-mirage/orm/collection');

var _collection2 = _interopRequireDefault(_collection);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Unit | Collection');

(0, _qunit.test)('it can be instantiated', function (assert) {
  var collection = new _collection2.default('plant');

  assert.ok(collection);
});

(0, _qunit.test)('it cannot be instantiated without a modelName', function (assert) {
  assert.throws(function () {
    new _collection2.default();
  }, /must pass a `modelName`/);
});

(0, _qunit.test)('it knows its modelname', function (assert) {
  var collection = new _collection2.default('author');

  assert.equal(collection.modelName, 'author');
});

(0, _qunit.test)('it can be instantiated with an array of models', function (assert) {
  var models = [{ id: 1 }, { id: 2 }, { id: 3 }];
  var collection = new _collection2.default('author', models);

  assert.ok(collection);
});

(0, _qunit.test)('#models returns the underlying array', function (assert) {
  var models = [{ id: 1 }, { id: 2 }, { id: 3 }];
  var collection = new _collection2.default('author', models);

  assert.deepEqual(collection.models, models);
});

// test('collection.filter returns collection instance', function(assert) {
//   let collection = new Collection('plant');
//   let filteredCollection = collection.filter(Boolean);
//   assert.ok(filteredCollection instanceof Collection);
//   assert.equal(filteredCollection.modelName, 'plant');
// });
//
// test('collection.mergeCollection works', function(assert) {
//   let collection1 = new Collection('plant', { name: 'chrerry' }, { name: 'uchreaflier' });
//   let collection2 = new Collection('plant', { name: 'vlip' });
//   assert.equal(collection1.length, 2);
//   assert.equal(collection2.length, 1);
//   collection2.mergeCollection(collection1);
//   assert.equal(collection2.length, 3);
//   assert.equal(collection2.modelName, 'plant');
// });
//