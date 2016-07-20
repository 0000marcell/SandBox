'use strict';

var _serializerRegistry = require('ember-cli-mirage/serializer-registry');

var _serializerRegistry2 = _interopRequireDefault(_serializerRegistry);

var _jsonApiSerializer = require('ember-cli-mirage/serializers/json-api-serializer');

var _jsonApiSerializer2 = _interopRequireDefault(_jsonApiSerializer);

var _schemaHelper = require('../schema-helper');

var _schemaHelper2 = _interopRequireDefault(_schemaHelper);

var _qunit = require('qunit');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _qunit.module)('Integration | Serializers | JSON API Serializer | Attrs List', {
  beforeEach: function beforeEach() {
    this.schema = _schemaHelper2.default.setup();
  },
  afterEach: function afterEach() {
    this.schema.db.emptyData();
  }
});

(0, _qunit.test)('it returns only the whitelisted attrs when serializing a model', function (assert) {
  this.registry = new _serializerRegistry2.default(this.schema, {
    wordSmith: _jsonApiSerializer2.default.extend({
      attrs: ['id', 'firstName']
    })
  });
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
        'first-name': 'Link'
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }
  });
});

(0, _qunit.test)('it returns only the whitelisted attrs when serializing a collection', function (assert) {
  this.registry = new _serializerRegistry2.default(this.schema, {
    wordSmith: _jsonApiSerializer2.default.extend({
      attrs: ['id', 'firstName']
    })
  });
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
        'first-name': 'Link'
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
        'first-name': 'Zelda'
      },
      relationships: {
        'blog-posts': {
          data: []
        }
      }
    }]
  });
});

(0, _qunit.test)('it can use different attr whitelists for different serializers', function (assert) {
  var registry = new _serializerRegistry2.default(this.schema, {
    wordSmith: _jsonApiSerializer2.default.extend({
      attrs: ['id', 'firstName'],
      include: ['blogPosts']
    }),
    blogPost: _jsonApiSerializer2.default.extend({
      attrs: ['id', 'title']
    })
  });
  var link = this.schema.wordSmiths.create({ id: 1, firstName: 'Link', age: 123 });
  link.createBlogPost({ title: 'A whole new world' });

  var result = registry.serialize(this.schema.wordSmiths.all());

  assert.deepEqual(result, {
    data: [{
      type: 'word-smiths',
      id: '1',
      attributes: {
        'first-name': 'Link'
      },
      relationships: {
        'blog-posts': {
          data: [{ type: 'blog-posts', id: '1' }]
        }
      }
    }],
    included: [{
      'attributes': {
        'title': 'A whole new world'
      },
      'id': '1',
      'relationships': {
        'fine-comments': {
          'data': []
        },
        'word-smith': {
          'data': { type: 'word-smiths', id: '1' }
        }
      },
      'type': 'blog-posts'
    }]
  });
});