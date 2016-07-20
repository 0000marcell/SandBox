'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _serializer = require('ember-cli-mirage/serializer');

var _serializer2 = _interopRequireDefault(_serializer);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _inflector = require('ember-cli-mirage/utils/inflector');

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | Base | Attribute Key Formatting', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
    this.registry = new _serializerRegistry2.default(this.schema, {
      wordSmith: _serializer2.default.extend({
        keyForAttribute: function keyForAttribute(key) {
          return (0, _inflector.camelize)(key);
        }
      })
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('keyForAttribute formats the attributes of a model', function (assert) {
  var wordSmith = this.schema.wordSmiths.create({
    id: 1,
    'first-name': 'Link',
    'last-name': 'Jackson',
    age: 323
  });

  var result = this.registry.serialize(wordSmith);

  assert.deepEqual(result, {
    wordSmith: {
      id: '1',
      firstName: 'Link',
      lastName: 'Jackson',
      age: 323
    }
  });
});

(0, _qunit.test)('keyForAttribute also formats the models in a collections', function (assert) {
  this.schema.wordSmiths.create({ id: 1, 'first-name': 'Link', 'last-name': 'Jackson' });
  this.schema.wordSmiths.create({ id: 2, 'first-name': 'Zelda', 'last-name': 'Brown' });
  var wordSmiths = this.schema.wordSmiths.all();

  var result = this.registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    wordSmiths: [{ id: '1', firstName: 'Link', lastName: 'Jackson' }, { id: '2', firstName: 'Zelda', lastName: 'Brown' }]
  });
});