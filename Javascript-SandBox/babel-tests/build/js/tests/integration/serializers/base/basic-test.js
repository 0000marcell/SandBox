'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

var _uniq2 = require('lodash/array/uniq');

var _uniq3 = _interopRequireDefault(_uniq2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Basic', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
    this.registry = new _serializerRegistry2.default(this.schema);
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it returns objects unaffected', function (assert) {
  var result = this.registry.serialize({ oh: 'hai' });

  assert.deepEqual(result, { oh: 'hai' });
});

(0, _qunit.test)('it returns arrays unaffected', function (assert) {
  var data = [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }];
  var result = this.registry.serialize(data);

  assert.deepEqual(result, data);
});

(0, _qunit.test)('it returns empty arrays unaffected', function (assert) {
  var result = this.registry.serialize([]);

  assert.deepEqual(result, []);
});

(0, _qunit.test)('it serializes a model by returning its attrs under a root', function (assert) {
  var wordSmith = this.schema.wordSmiths.create({
    id: 1,
    name: 'Link'
  });
  var result = this.registry.serialize(wordSmith);

  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      name: 'Link'
    }
  });
});

(0, _qunit.test)('it serializes a collection of models by returning an array of their attrs under a pluralized root', function (assert) {
  this.schema.wordSmiths.create({ id: 1, name: 'Link' });
  this.schema.wordSmiths.create({ id: 2, name: 'Zelda' });

  var wordSmiths = this.schema.wordSmiths.all();

  var result = this.registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    wordSmiths: [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }]
  });
});

(0, _qunit.test)('it can serialize an empty collection', function (assert) {
  var wordSmiths = this.schema.wordSmiths.all();
  var result = this.registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    wordSmiths: []
  });
});

(0, _qunit.test)('it returns POJAs of models unaffected', function (assert) {
  this.schema.wordSmiths.create({ name: 'Sam' });
  this.schema.wordSmiths.create({ name: 'Sam' });
  this.schema.wordSmiths.create({ name: 'Ganondorf' });

  var wordSmiths = this.schema.wordSmiths.all().models;
  var uniqueNames = (0, _uniq3.default)(wordSmiths, function (u) {
    return u.name;
  });
  var result = this.registry.serialize(uniqueNames);

  assert.deepEqual(result, uniqueNames);
});