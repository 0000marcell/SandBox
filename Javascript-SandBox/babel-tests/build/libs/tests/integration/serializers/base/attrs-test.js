'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Attrs List', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
    this.registry = new _serializerRegistry2.default(this.schema, {
      wordSmith: _serializer2.default.extend({
        attrs: ['id', 'name']
      })
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it returns only the whitelisted attrs when serializing a model', function (assert) {
  var wordSmith = this.schema.wordSmiths.create({
    id: 1,
    name: 'Link',
    age: 123
  });

  var result = this.registry.serialize(wordSmith);
  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      name: 'Link'
    }
  });
});

(0, _qunit.test)('it returns only the whitelisted attrs when serializing a collection', function (assert) {
  var schema = this.schema;

  schema.wordSmiths.create({ id: 1, name: 'Link', age: 123 });
  schema.wordSmiths.create({ id: 2, name: 'Zelda', age: 456 });

  var collection = this.schema.wordSmiths.all();
  var result = this.registry.serialize(collection);

  assert.deepEqual(result, {
    wordSmiths: [{ id: '1', name: 'Link' }, { id: '2', name: 'Zelda' }]
  });
});