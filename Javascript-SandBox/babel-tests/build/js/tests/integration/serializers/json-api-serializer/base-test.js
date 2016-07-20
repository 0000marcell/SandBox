'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | JSON API Serializer | Base', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
    this.registry = new _serializerRegistry2.default(this.schema, {
      application: _jsonApiSerializer2.default
    });
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it includes all attributes for a model', function (assert) {
  var user = this.schema.wordSmiths.create({
    id: 1,
    firstName: 'Link',
    age: 123
  });

  var result = this.registry.serialize(user);
  assert.deepEqual(result, {
    data: {
      type: 'word-smiths',
      id: '1',
      attributes: {
        'first-name': 'Link',
        age: 123
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }
  });
});

(0, _qunit.test)('it includes all attributes for each model in a collection', function (assert) {
  var schema = this.schema;

  schema.wordSmiths.create({ id: 1, firstName: 'Link', age: 123 });
  schema.wordSmiths.create({ id: 2, firstName: 'Zelda', age: 456 });

  var collection = this.schema.wordSmiths.all();
  var result = this.registry.serialize(collection);

  assert.deepEqual(result, {
    data: [{
      type: 'word-smiths',
      id: '1',
      attributes: {
        'first-name': 'Link',
        age: 123
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }, {
      type: 'word-smiths',
      id: '2',
      attributes: {
        'first-name': 'Zelda',
        age: 456
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }]
  });
});

(0, _qunit.test)('it can serialize an empty collection', function (assert) {
  var wordSmiths = this.schema.wordSmiths.all();
  var result = this.registry.serialize(wordSmiths);

  assert.deepEqual(result, {
    data: []
  });
});